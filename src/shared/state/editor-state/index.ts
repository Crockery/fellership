import { proxy } from "valtio";
import { parseGameSettings } from "./utils/parse-game-settings";

const DEFAULT_STATE = {
	screen_height: 0,
	screen_width: 0,
	initialized: false,
};

export const editor_state = proxy({
	screen_height: DEFAULT_STATE.screen_height,
	screen_width: DEFAULT_STATE.screen_width,
	initialized: DEFAULT_STATE.initialized,
	get hash() {
		return window.btoa(JSON.stringify([this.screen_height, this.screen_width]));
	},
	get unhashed() {
		return window.atob(this.hash);
	},
	reset() {
		this.screen_height = DEFAULT_STATE.screen_height;
		this.screen_width = DEFAULT_STATE.screen_width;
		this.initialized = DEFAULT_STATE.initialized;
	},
});

interface InitEditorArgs {
	file?: string;
	hash?: string;
}

export const initEditor = ({ file, hash }: InitEditorArgs): Promise<string | undefined> => {
	return new Promise((resolve, reject) => {
		try {
			if (!file && !hash) {
				console.error("Tried to initialize editor without a hash or file.");
				resolve(undefined)
			}

			editor_state.reset();

			if (file) {
				const parsed = parseGameSettings(file);

				editor_state.screen_height = parsed.screen_height;
				editor_state.screen_width = parsed.screen_width;
				editor_state.initialized = true;

				console.log(parsed);

				resolve(editor_state.hash);
			} else if (hash) {
				const un_hashed = JSON.parse(window.atob(hash));

				console.log(un_hashed);

				resolve(undefined);
			}
		} catch (error) {
			reject(error);
		}
	});
};

/**
 * HUDSettingsProfile=(
 * ProfileName="My UI Profile",
 * PartyFrameGrowthDirection="Expanding up",
 * PartyFrameSpacing=29.000000,
 * SnapGridSize=8,
 * PartyUnitFrameBuffPlacement="Top",
 * PartyUnitFrameShowPercent=True,
 * PartyUnitFrameShowRole=True,
 * ElementCanvasPositions=(
 *  ("Sylvie - Flutterflies", (X=-4.000000,Y=118.000000)),
 *  ("Sylvie - Mana", (X=-4.925003,Y=153.000000)),
 *  ("Boss Unit Frames", (X=0.000000,Y=120.000000)),
 *  ("Boss Timers - Long Cooldown", (X=-132.209534,Y=-220.390472)),
 *  ("Boss Timers - Short Cooldown", (X=-673.000000,Y=-115.642860)),
 *  ("Boss Ability Alert", (X=-2.000000,Y=-199.000000)),
 *  ("Dungeon Info", (X=-16.000000,Y=160.000000)),
 *  ("Combat Info 1", (X=-8.000000,Y=-8.000000)),
 *  ("Combat Info 2", (X=-8.000000,Y=-138.000000)),
 *  ("Quest Tracker", (X=-16.000000,Y=240.000000)),
 *  ("Buffs", (X=-288.000000,Y=72.000000)),
 *  ("Ability Castbar", (X=-10.000000,Y=180.000000)),
 *  ("Hero Unit Frame", (X=0.000000,Y=-416.000000)),
 *  ("Party Unit Frames", (X=302.500000,Y=83.000000)),
 *  ("Target Unit Frame", (X=112.000000,Y=-352.000000)),
 *  ("Target of Target", (X=288.000000,Y=-336.000000)),
 *  ("Ability Tooltips", (X=0.000000,Y=-264.000000)),
 *  ("Debuffs", (X=384.000000,Y=-336.000000)),
 *  ("System Performance", (X=128.000000,Y=456.000000)),
 *  ("Extra AbilityBar #8", (X=-8.000000,Y=0.000000)),
 *  ("Extra AbilityBar #7", (X=-8.000000,Y=0.000000)),
 *  ("Extra AbilityBar #6", (X=-8.000000,Y=0.000000)),
 *  ("Extra AbilityBar #5", (X=-8.000000,Y=0.000000)),
 *  ("Extra AbilityBar #4", (X=-10.000000,Y=0.000000)),
 *  ("Extra AbilityBar #3", (X=-8.000000,Y=0.000000)),
 *  ("Extra AbilityBar #2", (X=168.000000,Y=-476.000000)),
 *  ("Extra AbilityBar #1", (X=460.000000,Y=84.000000)),
 *  ("Default Ability Bar #1", (X=16.000000,Y=-20.000000)),
 *  ("Default Ability Bar #2", (X=16.000000,Y=-92.000000)),
 *  ("Ultimate Ability", (X=640.000000,Y=-104.000000)),
 *  ("Mount Ability", (X=612.000000,Y=-100.000000)),
 *  ("Chat", (X=8.000000,Y=-8.000000)),
 *  ("Editor Debug Cheats", (X=464.405792,Y=0.000000)),
 *  ("Hovered Unit Tooltip", (X=-240.000000,Y=-328.000000)),
 *  ("Meiko - Buff", (X=0.000000,Y=115.000000)),
 *  ("Meiko - Stone Shield", (X=95.000000,Y=15.000000)),
 *  ("Meiko - Combo", (X=0.000000,Y=160.000000)),
 *  ("Tariq - Swing", (X=120.000000,Y=15.000000)),
 *  ("Tariq - Rage", (X=0.000000,Y=140.000000)),
 *  ("Hero Buffs", (X=-304.000000,Y=8.000000)),
 *  ("Important Hero Buffs", (X=0.000000,Y=-424.000000)),
 *  ("Hero Debuffs", (X=-216.959976,Y=-458.239990)),
 *  ("Vigour - Orbs", (X=0.000000,Y=110.000000)),
 *  ("Vigour - Mana", (X=0.000000,Y=150.000000)),
 *  ("Elarion - Bar", (X=0.000000,Y=105.000000)),
 *  ("Ardeos - Fire", (X=0.000000,Y=115.000000)),
 *  ("Helena - Shield", (X=95.000000,Y=15.000000))),
 * ElementCanvasAnchors=(
 *  ("Sylvie - Flutterflies", Center),
 *  ("Sylvie - Mana", Center),
 *  ("Boss Unit Frames", TopMid),
 *  ("Boss Timers - Long Cooldown", MidRight),
 *  ("Boss Timers - Short Cooldown", MidRight),
 *  ("Boss Ability Alert", Center),
 *  ("Dungeon Info", TopRight),
 *  ("Combat Info 1", BottomRight),
 *  ("Combat Info 2", BottomRight),
 *  ("Quest Tracker", TopRight),
 *  ("Buffs", TopRight),
 *  ("Ability Castbar", Center),
 *  ("Hero Unit Frame", BottomMid),
 *  ("Party Unit Frames", Center),
 *  ("Target Unit Frame", BottomLeft),
 *  ("Target of Target", BottomLeft),
 *  ("Ability Tooltips", BottomRight),
 *  ("Debuffs", BottomMid),
 *  ("System Performance", TopLeft),
 *  ("Extra AbilityBar #8", MidRight),
 *  ("Extra AbilityBar #7", MidRight),
 *  ("Extra AbilityBar #6", MidRight),
 *  ("Extra AbilityBar #5", MidRight),
 *  ("Extra AbilityBar #4", MidRight),
 *  ("Extra AbilityBar #3", MidRight),
 *  ("Extra AbilityBar #2", BottomMid),
 *  ("Extra AbilityBar #1", Center),
 *  ("Default Ability Bar #1", BottomMid),
 *  ("Default Ability Bar #2", BottomMid),
 *  ("Ultimate Ability", BottomLeft),
 *  ("Mount Ability", BottomLeft),
 *  ("Chat", BottomLeft),
 *  ("Editor Debug Cheats", TopMid),
 *  ("Hovered Unit Tooltip", BottomRight),
 *  ("Meiko - Buff", Center),
 *  ("Meiko - Stone Shield", Center),
 *  ("Meiko - Combo", Center),
 *  ("Tariq - Swing", Center),
 *  ("Tariq - Rage", Center),
 *  ("Hero Buffs", TopRight),
 *  ("Important Hero Buffs", BottomMid),
 *  ("Hero Debuffs", BottomMid),
 *  ("Vigour - Orbs", Center),
 *  ("Vigour - Mana", Center),
 *  ("Elarion - Bar", Center),
 *  ("Ardeos - Fire", Center),
 *  ("Helena - Shield", Center)
 * ),
 * ElementAutomaticAnchoring=(
 *  ("Sylvie - Flutterflies", True),
 *  ("Sylvie - Mana", True),
 *  ("Boss Unit Frames", True),
 *  ("Boss Timers - Long Cooldown", True),
 *  ("Boss Timers - Short Cooldown", True),
 *  ("Boss Ability Alert", True),
 *  ("Dungeon Info", True),
 *  ("Combat Info 1", True),
 *  ("Combat Info 2", True),
 *  ("Quest Tracker", True),
 *  ("Buffs", True),
 *  ("Ability Castbar", True),
 *  ("Hero Unit Frame", True),
 *  ("Party Unit Frames", True),
 *  ("Target Unit Frame", True),
 *  ("Target of Target", True),
 *  ("Ability Tooltips", True),
 *  ("Debuffs", True),
 *  ("System Performance", True),
 *  ("Extra AbilityBar #8", True),
 *  ("Extra AbilityBar #7", True),
 *  ("Extra AbilityBar #6", True),
 *  ("Extra AbilityBar #5", True),
 *  ("Extra AbilityBar #4", True),
 *  ("Extra AbilityBar #3", True),
 *  ("Extra AbilityBar #2", True),
 *  ("Extra AbilityBar #1", True),
 *  ("Default Ability Bar #1", True),
 *  ("Default Ability Bar #2", True),
 *  ("Ultimate Ability", True),
 *  ("Mount Ability", True),
 *  ("Chat", True),
 *  ("Editor Debug Cheats", True),
 *  ("Hovered Unit Tooltip", True),
 *  ("Meiko - Buff", True),
 *  ("Meiko - Stone Shield", True),
 *  ("Meiko - Combo", True),
 *  ("Tariq - Swing", True),
 *  ("Tariq - Rage", True),
 *  ("Hero Buffs", True),
 *  ("Important Hero Buffs", True),
 *  ("Hero Debuffs", True),
 *  ("Vigour - Orbs", True),
 *  ("Vigour - Mana", True),
 *  ("Elarion - Bar", True),
 *  ("Ardeos - Fire", True),
 *  ("Helena - Shield", True)),
 * AbilityBarShowBackground=True,
 * DamageMeterShowMeter1=True,
 * DamageMeterShowMeter2=True,
 * DamageMeterUseLargeText=False,
 * DamageMeterWindowWidth=400,
 * DungeonInfoUseMinimalVersion=False,
 * DungeonInfoShowCurses=True,
 * DungeonInfoShowAscensions=True,
 * DungeonInfoShowBossProgress=True,
 * TargetUnitFrameShowIcon=True,
 * TargetUnitFrameAlwaysShowHealthText=True,
 * TargetUnitFrameMinimalFrameMode=False,
 * TargetUnitFrameLargeNameText=False,
 * TargetUnitFrameShowCastbar=True,
 * TargetUnitFrameScale=0,
 * TargetUnitFrameWidth=0,
 * TargetOfTargetShow=True,
 * TargetOfTargetShowIcon=True,
 * TargetOfTargetMinimalFrameMode=True,
 * TargetOfTargetScale=0,
 * TargetOfTargetWidth=0,
 * SelfUnitFrameShowIcon=False,
 * SelfUnitFrameShowName=True,
 * SelfUnitFrameAlwaysShowHealthNumbers=True,
 * SelfUnitFrameMinimalFrameMode=True,
 * SelfUnitFrameLargeNameText=False,
 * SelfUnitFrameShowRoleIcon=False,
 * SelfUnitFrameScale=0,
 * SelfUnitFrameWidth=0,
 * CooldownTrackerShow=True,
 * CooldownTrackerShowBackground=True,
 * CooldownTrackerSize=3,
 * CooldownTrackerGrowthDirection="Expanding to the right",
 * AbilityBarSettings=((DEFAULT_BAR_ROW1, (SlotSize=72,BarEnabled=True)),(DEFAULT_BAR_ROW2, (SlotSize=72,BarEnabled=True)),(CUSTOM_GROUP1, (Slots=7,Rows=7,SlotSize=72,BarEnabled=True)),(CUSTOM_GROUP2, (Slots=6,SlotSize=56,BarEnabled=True)),(CUSTOM_GROUP3, ()),(CUSTOM_GROUP4, ()),(CUSTOM_GROUP5, ()),(CUSTOM_GROUP6, ()),(CUSTOM_GROUP7, ()),(CUSTOM_GROUP8, ()),(SPECIAL_GROUP_MOUNTBUTTON, (Slots=1,SlotSize=88,BarEnabled=True,Visible=False)),(SPECIAL_GROUP_ULTIMATEBUTTON, (Slots=1,BarEnabled=True,ClickThrough=True))),
 * HeroHUDPrimaryAngle=(((TagName="CharacterID.Hero.Warmaster"), 0),((TagName="CharacterID.Hero.Mosse"), 0),((TagName="CharacterID.Hero.Rime"), 0),((TagName="CharacterID.Hero.Vigor"), 0),((TagName="CharacterID.Hero.Ink"), 0),((TagName="CharacterID.Hero.Meiko"), 0),((TagName="CharacterID.Hero.Mara"), 0),((TagName="CharacterID.Hero.Bowguy"), 0),((TagName="CharacterID.Hero.Firemage"), 0)),
 * HeroHUDSecondaryAngle=(((TagName="CharacterID.Hero.Warmaster"), 0),((TagName="CharacterID.Hero.Mosse"), 0),((TagName="CharacterID.Hero.Rime"), 0),((TagName="CharacterID.Hero.Vigor"), 0),((TagName="CharacterID.Hero.Ink"), 0),((TagName="CharacterID.Hero.Meiko"), 0),((TagName="CharacterID.Hero.Mara"), 0),((TagName="CharacterID.Hero.Bowguy"), 0),((TagName="CharacterID.Hero.Firemage"), 0)),
 * HeroHUDTertiaryAngle=(((TagName="CharacterID.Hero.Warmaster"), 0),((TagName="CharacterID.Hero.Mosse"), 0),((TagName="CharacterID.Hero.Rime"), 0),((TagName="CharacterID.Hero.Vigor"), 0),((TagName="CharacterID.Hero.Ink"), 0),((TagName="CharacterID.Hero.Meiko"), 0),((TagName="CharacterID.Hero.Mara"), 0),((TagName="CharacterID.Hero.Bowguy"), 0),((TagName="CharacterID.Hero.Firemage"), 0)),
 * HeroHUDPrimaryScale=(((TagName="CharacterID.Hero.Warmaster"), 0),((TagName="CharacterID.Hero.Mosse"), -20),((TagName="CharacterID.Hero.Rime"), 0),((TagName="CharacterID.Hero.Vigor"), 0),((TagName="CharacterID.Hero.Ink"), 0),((TagName="CharacterID.Hero.Meiko"), 0),((TagName="CharacterID.Hero.Mara"), 0),((TagName="CharacterID.Hero.Bowguy"), 0),((TagName="CharacterID.Hero.Firemage"), 0)),
 * HeroHUDSecondaryScale=(((TagName="CharacterID.Hero.Warmaster"), 0),((TagName="CharacterID.Hero.Mosse"), 5),((TagName="CharacterID.Hero.Rime"), 0),((TagName="CharacterID.Hero.Vigor"), 0),((TagName="CharacterID.Hero.Ink"), 0),((TagName="CharacterID.Hero.Meiko"), 0),((TagName="CharacterID.Hero.Mara"), 0),((TagName="CharacterID.Hero.Bowguy"), 0),((TagName="CharacterID.Hero.Firemage"), 0)),
 * HeroHUDSecondaryScaleY=(((TagName="CharacterID.Hero.Warmaster"), 0),((TagName="CharacterID.Hero.Mosse"), 50),((TagName="CharacterID.Hero.Rime"), 0),((TagName="CharacterID.Hero.Vigor"), 0),((TagName="CharacterID.Hero.Ink"), 0),((TagName="CharacterID.Hero.Meiko"), 0),((TagName="CharacterID.Hero.Mara"), 0),((TagName="CharacterID.Hero.Bowguy"), 0),((TagName="CharacterID.Hero.Firemage"), 0)),
 * HeroHUDTertiaryScale=(((TagName="CharacterID.Hero.Warmaster"), 0),((TagName="CharacterID.Hero.Mosse"), 0),((TagName="CharacterID.Hero.Rime"), 0),((TagName="CharacterID.Hero.Vigor"), 0),((TagName="CharacterID.Hero.Ink"), 0),((TagName="CharacterID.Hero.Meiko"), 0),((TagName="CharacterID.Hero.Mara"), 0),((TagName="CharacterID.Hero.Bowguy"), 0),((TagName="CharacterID.Hero.Firemage"), 0)),
 * EnemyTooltipEnabled=True,
 * SelfBuffsExtraScale=0,
 * SelfDebuffsExtraScale=24,
 * SelfBuffGrowDirection="Expanding to the left",
 * SelfDebuffGrowDirection="Expanding to the left",
 * HeroBuffbarExtraScale=0,
 * HeroBuffbarGrowDirection="Centered - Horizontal")"
 */
