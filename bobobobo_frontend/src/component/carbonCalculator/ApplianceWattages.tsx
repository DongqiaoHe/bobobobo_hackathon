import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightIcon from '@mui/icons-material/Light';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BlenderIcon from '@mui/icons-material/Blender';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DryIcon from '@mui/icons-material/Dry';
import CoffeeIcon from '@mui/icons-material/LocalCafe';
import Flatware from '@mui/icons-material/Flatware';
import BuildIcon from '@mui/icons-material/Build';
import FridgeIcon from '@mui/icons-material/Kitchen';
import HairdryerIcon from '@mui/icons-material/LocalLaundryService';
import LocalLaundryService from '@mui/icons-material/LocalLaundryService';
import TeaKettleIcon from '@mui/icons-material/LocalDrink';
import LightbulbIcon from '@mui/icons-material/EmojiObjects';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import PoolIcon from '@mui/icons-material/Pool';
import RiceCookerIcon from '@mui/icons-material/EmojiFoodBeverage';
import HotTubIcon from '@mui/icons-material/HotTub';
import TvIcon from '@mui/icons-material/Tv';
import BreakfastDining from '@mui/icons-material/BreakfastDining';
import HomeIcon from '@mui/icons-material/Home';
import VacuumIcon from '@mui/icons-material/LocalCarWash';

export const ApplianceWattage = [
  {
    "name": "Air Con - Portable",
    "kilowatt": 1.5,
    "icon": <AcUnitIcon />,
    "tip": "Set the thermostat at a comfortable temperature and avoid setting it too cold. Use fans to circulate air and keep doors and windows closed."
  },
  {
    "name": "Air Con - Small Window",
    "kilowatt": 2.3,
    "icon": <AcUnitIcon />,
    "tip": "Clean or replace filters regularly. Use energy-efficient settings and consider using a programmable thermostat."
  },
  {
    "name": "Air Con - Large Wall",
    "kilowatt": 3.5,
    "icon": <AcUnitIcon />,
    "tip": "Regular maintenance and cleaning can improve efficiency. Ensure windows and doors are sealed properly when the air conditioner is on."
  },
  {
    "name": "Air Con - Ducted",
    "kilowatt": 6,
    "icon": <AcUnitIcon />,
    "tip": "Use zonal cooling to avoid cooling unoccupied rooms. Regularly inspect ducts for leaks and ensure they are sealed."
  },
  {
    "name": "Bathroom light",
    "kilowatt": 1.1,
    "icon": <LightIcon />,
    "tip": "Switch to energy-efficient LED bulbs and turn off lights when not in use."
  },
  {
    "name": "BBQ - Electric",
    "kilowatt": 2.4,
    "icon": <WhatshotIcon />,
    "tip": "Preheat only as long as needed and turn off immediately after use."
  },
  {
    "name": "Blender",
    "kilowatt": 0.6,
    "icon": <BlenderIcon />,
    "tip": "Use only for the necessary amount of time. Ensure lids are secure to optimize blending speed and reduce operation time."
  },
  {
    "name": "Breadmaker",
    "kilowatt": 0.5,
    "icon": <KitchenIcon />,
    "tip": "Batch-make and freeze where possible. Avoid opening the lid frequently during operation."
  },
  {
    "name": "Clothes Dryer (per cycle)",
    "kilowatt": 4,
    "icon": <DryIcon />,
    "tip": "Air dry clothes when possible. Clean lint trap after each use to maintain efficiency."
  },
  {
    "name": "Coffee Machine",
    "kilowatt": 0.6,
    "icon": <CoffeeIcon />,
    "tip": "Turn off when not in use. Use a thermal carafe to keep coffee warm instead of continuously heating it."
  },
  {
    "name": "Dishwasher (per cycle)",
    "kilowatt": 2.4,
    "icon": <Flatware />,
    "tip": "Run full loads and use the energy-saving mode. Avoid using the heated dry option."
  },
  {
    "name": "Electric Cooktop - Small hotplate",
    "kilowatt": 1.2,
    "icon": <KitchenIcon />,
    "tip": "Use flat-bottomed pans that fit the size of the hotplate. Turn off a few minutes before your food is ready, using residual heat to finish cooking."
  },
  {
    "name": "Electric Cooktop - Large hotplate",
    "kilowatt": 2.2,
    "icon": <KitchenIcon />,
    "tip": "Use lids to retain heat and match pot size to burner size. Turn off a few minutes before your food is ready, using the residual heat to finish cooking."
  },
  {
    "name": "Electric Drill",
    "kilowatt": 0.7,
    "icon": <BuildIcon />,
    "tip": "Keep batteries charged but avoid overcharging. Use the right bit and setting for the job to work efficiently."
  },
  {
    "name": "Electric Frypan",
    "kilowatt": 1.7,
    "icon": <KitchenIcon />,
    "tip": "Cover the frypan to retain heat and cook more efficiently. Turn off when food is nearly ready and use residual heat to complete cooking."
  },
  {
    "name": "Electric Oven",
    "kilowatt": 2.1,
    "icon": <KitchenIcon />,
    "tip": "Preheat only when essential. Try batch cooking and use residual heat for warming food."
  },
  {
    "name": "Electric Wok",
    "kilowatt": 2,
    "icon": <KitchenIcon />,
    "tip": "Prepare all ingredients beforehand to minimize continuous operation. Turn off slightly before food is ready, using the retained heat to finish cooking."
  },
  {
    "name": "Fridge",
    "kilowatt": 1.5,
    "icon": <FridgeIcon />,
    "tip": "Keep the fridge at optimal temperatures: 0-4°C for the fridge and -18°C for the freezer. Ensure the door seals are intact and avoid leaving the door open."
  },
  {
    "name": "Hairdryer",
    "kilowatt": 1.5,
    "icon": <HairdryerIcon />,
    "tip": "Use the lowest effective setting. Towel dry hair to reduce drying time."
  },
  {
    "name": "Heater - Large fan/radiator",
    "kilowatt": 2.4,
    "icon": <AcUnitIcon />,
    "tip": "Use programmable thermostats and set them to lower temperatures at night or when away. Ensure doors and windows are sealed properly to keep the warmth in."
  },
  {
    "name": "Heater - Medium fan/radiator",
    "kilowatt": 1.2,
    "icon": <AcUnitIcon />,
    "tip": "Only heat the rooms you're using. Wear warmer clothing and use blankets to avoid over-relying on heaters."
  },
  {
    "name": "Heater - Large oil column heater",
    "kilowatt": 2.4,
    "icon": <AcUnitIcon />,
    "tip": "Place in central locations for even heating. Maintain regular cleaning and upkeep for efficient operation."
  },
  {
    "name": "Heater - Small oil column heater",
    "kilowatt": 1.2,
    "icon": <AcUnitIcon />,
    "tip": "Avoid using it continuously; switch on just before you need to use a room and turn off when not needed."
  },
  {
    "name": "Iron(small)",
    "kilowatt": 1,
    "icon": <LocalLaundryService />,
    "tip": "Iron batches of clothes at once. Use the appropriate temperature setting for different fabrics to avoid ironing over areas multiple times."
  },
  {
    "name": "Kettle",
    "kilowatt": 2.4,
    "icon": <TeaKettleIcon />,
    "tip": "Only boil the amount of water you need. Descale regularly to ensure efficient heating."
  },
  {
    "name": "Light (1 Incandescent Bulb)",
    "kilowatt": 0.075,
    "icon": <LightbulbIcon />,
    "tip": "Switch to energy-efficient LED bulbs. Turn off lights when not in use."
  },
  {
    "name": "Microwave Oven",
    "kilowatt": 1,
    "icon": <MicrowaveIcon />,
    "tip": "Defrost food before microwaving. Use microwave-specific containers to ensure efficient cooking."
  },
  {
    "name": "Pool Pump",
    "kilowatt": 1.1,
    "icon": <PoolIcon />,
    "tip": "Run the pump during off-peak hours. Ensure it's not running 24/7 unless necessary."
  },
  {
    "name": "Pool Heater - Heat Pump",
    "kilowatt": 5,
    "icon": <PoolIcon />,
    "tip": "Install a pool cover to maintain the temperature. Regularly maintain and clean the heat pump."
  },
  {
    "name": "Pool Heater - Solar",
    "kilowatt": 0.5,
    "icon": <PoolIcon />,
    "tip": "Ensure solar panels are positioned correctly. Regularly clean solar panels to maintain efficiency."
  },
  {
    "name": "Rice cooker",
    "kilowatt": 0.7,
    "icon": <RiceCookerIcon />,
    "tip": "Use the right amount of water. Soak rice for a short duration before cooking to reduce cooking time."
  },
  {
    "name": "Spa",
    "kilowatt": 6,
    "icon": <HotTubIcon />,
    "tip": "Keep the spa covered when not in use. Adjust the thermostat to a lower setting when not actively using."
  },
  {
    "name": "Television",
    "kilowatt": 0.2,
    "icon": <TvIcon />,
    "tip": "Turn off the television when not in use. Use energy-saving modes available in settings."
  },
  {
    "name": "Toaster",
    "kilowatt": 1,
    "icon": <BreakfastDining />,
    "tip": "Only toast the number of slices needed. Unplug when not in use."
  },
  {
    "name": "Underfloor heating - living room",
    "kilowatt": 3.6,
    "icon": <HomeIcon />,
    "tip": "Insulate your home properly. Use a timer or thermostat to regulate temperature."
  },
  {
    "name": "Underfloor heating - bedroom",
    "kilowatt": 1.2,
    "icon": <HomeIcon />,
    "tip": "Insulate your home properly. Use a timer or thermostat to regulate temperature."
  },
  {
    "name": "Underfloor heating - bathroom",
    "kilowatt": 0.9,
    "icon": <HomeIcon />,
    "tip": "Insulate your home properly. Only turn on the heating when using the bathroom."
  },
  {
    "name": "Underfloor heating - kitchen",
    "kilowatt": 1.2,
    "icon": <HomeIcon />,
    "tip": "Insulate your home properly. Use a timer or thermostat to regulate temperature."
  },
  {
    "name": "Vacuum cleaner",
    "kilowatt": 1.2,
    "icon": <VacuumIcon />,
    "tip": "Vacuum efficiently by keeping filters clean. Empty the dust container regularly to maintain optimal suction."
  },
  {
    "name": "Washing machine (per cycle)",
    "kilowatt": 0.9,
    "icon": <LocalLaundryService />,
    "tip": "Wash with full loads. Use cold water settings when possible."
  }
]