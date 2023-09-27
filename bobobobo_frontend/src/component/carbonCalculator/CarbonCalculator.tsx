import React, { useCallback, useMemo, useEffect, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import carbonFootprintLogo from '../../image/footprintLogo.jpg';
import resultPageImg from '../../image/resultPageImg.jpg';
import AddIcon from '@mui/icons-material/Add';
import { ApplianceWattage } from "./ApplianceWattages";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShareIcon from '@mui/icons-material/Share';
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Bar,
} from "recharts"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { Card, Container, Typography } from '@mui/material';
import TodayIcon from "@mui/icons-material/Today";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {
    AppBar, Divider, FormControl,
    InputLabel,
    MenuItem,
    Select,
    Tab, TableBody,
    TableCell,
    TableContainer, TableHead, TableRow,
    Tabs,
} from "@mui/material";
import Button from "@mui/material/Button";
import { postMoment } from '../../utils/blogApi';
import Avatar from "@mui/material/Avatar";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material';

// @ts-ignore
const CarbonCalculator = () => {

    const timeframes = [
        {
            label: "One Month",
            value: 1,
            icon: <TodayIcon />,
        },
        {
            label: "Three Months",
            value: 3,
            icon: <DateRangeIcon />,
        },
        {
            label: "One Year",
            value: 12,
            icon: <CalendarMonthIcon />,
        },
    ];
    const carbonConsumedAustralia = 15100;

    const [showUtilityFields, setShowUtilityFields] = useState(false);
    const [showActivityDropdown, setShowActivityDropdown] = useState(true);
    const [currentActivity, setCurrentActivity] = useState<any>(ApplianceWattage[0].name);
    const [timeOfUsage, setTimeOfUsage] = useState<number>(0);
    const [inputtedActivities, setInputtedActivities] = useState<any>([]);
    const [electricityUsage, setElectricityUsage] = useState(0);
    const [gasUsage, setGasUsage] = useState(0);
    const [electricityUsageInCarbon, setElectricityUsageInCarbon] = useState(0);
    const [gasUsageInCarbon, setGasUsageInCarbon] = useState(0);
    const [showEstimation, setShowEstimation] = useState(false);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState(timeframes[0].value);
    const theme = useTheme();

    useEffect(() => {
        setElectricityUsageInCarbon(electricityUsage * 0.85);
        setGasUsageInCarbon(gasUsage * 11.7 * 0.02);
    }, [electricityUsage, gasUsage, setElectricityUsage, setGasUsage]);
    const resultActivityUsage = useMemo(() => {
        return inputtedActivities.reduce((acc: any, activity: { carbon: any; }) => {
            return acc + activity.carbon;
        }, 0);
    }, [inputtedActivities]);

    const totalCarbonByActivity = useMemo(() => {
        return inputtedActivities.reduce((acc: any, curr: any) => acc + curr.carbon, 0);
    }, [inputtedActivities]);

    const totalCarbonByBill = useMemo(() => {
        return (gasUsageInCarbon + electricityUsageInCarbon) * (12 / selectedTimeFrame);
    }, [electricityUsageInCarbon, gasUsageInCarbon, selectedTimeFrame]);

    const largestCarbon = useMemo(() => {
        return Math.max(totalCarbonByBill, totalCarbonByActivity * 52).toFixed(2);
    }, [totalCarbonByBill, totalCarbonByActivity]);

    const lessThanAvg = useMemo(() => {
        return ((carbonConsumedAustralia - Number(largestCarbon)) / carbonConsumedAustralia * 100);
    }, [largestCarbon]);

    const convertToYearly = useCallback(
        (value: number) => { return (12 / selectedTimeFrame) * value; }, [selectedTimeFrame]);

    const planeRounds = useMemo(() => {
        return Math.round(convertToYearly(Number(largestCarbon)) / 0.115 / 758);
    }, [convertToYearly, largestCarbon]);
    const handleEstimationBtnOnClick = () => { setShowEstimation(true); };
    const handleUtilityButtonClick = () => {
        setShowUtilityFields(true);
        setShowActivityDropdown(false);
    };
    const handleActivityButtonClick = () => {
        setShowActivityDropdown(true);
        setShowUtilityFields(false);
    };
    const handleSelectedActivityChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCurrentActivity(e.target.value);
    };
    const handleSelectedTimeFrameChange = (v: any) => {
        setSelectedTimeFrame(parseInt(v));
    };
    const handleAddButtonClick = () => {
        const existingActivityIndex = inputtedActivities.findIndex(
            (activity: { activity: any; }) => activity.activity === currentActivity
        );

        if (existingActivityIndex !== -1 && timeOfUsage > 0) {
            // do nothing
        } else if (timeOfUsage > 0) {
            const indexAppliance = ApplianceWattage.findIndex((activity) => activity.name === currentActivity);

            setInputtedActivities([
                ...inputtedActivities,
                {
                    activity: currentActivity,
                    hours: timeOfUsage,
                    carbon: ApplianceWattage[indexAppliance].kilowatt * timeOfUsage * 0.85 || 0,
                },
            ]);
        }
    };

    const handleNumericInputChange = (event: any, setterFunc: any) => {
        const value = event.target.value;
        const numericRegex = /^[0-9]*$/; // This regex matches any string that contains only digits.
        if ((numericRegex.test(value) || value === "") && value <= 100000) {
            setterFunc(value);
        }
    };
    const handleDeleteButtonClick = (index: number) => {
        const updatedList = [...inputtedActivities];
        updatedList.splice(index, 1);
        setInputtedActivities(updatedList);
    };

    const handleResetOnClick = () => {
        setShowEstimation(false);
        setShowUtilityFields(false);
        setShowActivityDropdown(true);
        setTimeOfUsage(0);
        setCurrentActivity(ApplianceWattage[0].name);
        setInputtedActivities([]);
        setElectricityUsage(0);
        setGasUsage(0);
    }

    const headerText = () => {
        return (
            <div>
                <Container disableGutters maxWidth="sm" style={{ marginTop: "20px" }}>
                    <br /><br />
                    <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Calculate Your <span style={{ color: theme.palette.success.main }}>Carbon Footprint</span>
                    </Typography>
                    <br />
                    <Typography variant="body1" align="center" color="textSecondary" component="p">
                        Estimate your environmental impact on the measured greenhouse gas emissions associated with your lifestyle choices :)
                    </Typography>
                    <br /><br />
                </Container>
            </div>
        )
    };
    const appBar = () => {
        return (
            <AppBar component="div" position="static" elevation={0} sx={{ backgroundColor: "white", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Tabs value={showActivityDropdown ? 0 : 1} sx={{
                        "& .MuiTabs-indicator": { display: "none" },
                        "& .Mui-selected": { color: '#5e8c43', fontWeight: "bold", },
                        "& .MuiTab-root": { textTransform: "none", color: theme.palette.success.main, fontSize: "18px" },
                    }}>
                        <Tab label="Track Activities" onClick={handleActivityButtonClick} />
                        <Tab label="Track Utility Bill" onClick={handleUtilityButtonClick} />
                    </Tabs>
                </div>
            </AppBar>
        )
    };

    const userInputTrackActivity = () => {
        return (
            <div>
                <FormControl variant="outlined">
                    <InputLabel shrink>Select Activity</InputLabel>
                    <Select
                        label="Select Activity"
                        sx={{
                            width: '300px',
                            m:1,
                            border: '1px solid lightgrey',
                            borderRadius: '4px',
                        }}
                        value={currentActivity}
                        onChange={handleSelectedActivityChange}
                    >
                        {ApplianceWattage.map((activity) => (
                            <MenuItem key={activity.name} value={activity.name}>
                                {activity.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <br />
                <TextField
                    label="Time of Usage"
                    type="number"
                    id="outlined-start-adornment-time"
                    sx={{ m: 1, width: '300px', height: '2rem', color: '#E88D2E' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="start">hour(s)</InputAdornment>,
                    }}
                    value={timeOfUsage}
                    onChange={(e) => setTimeOfUsage(parseFloat(e.target.value))}
                />
            </div>
        )
    }
    const userInputTrackUtilityBill = () => {
        return (
            <div>
                <>
                    <FormControl variant="outlined" >
                        <InputLabel shrink>Select Months</InputLabel>
                        <Select
                            label="Select Months"
                            sx={{
                                m: 1,
                                width: '300px',
                                border: '1px solid lightgrey',
                                borderRadius: '4px',
                            }}
                            value={selectedTimeFrame}
                            onChange={e => {
                                handleSelectedTimeFrameChange(e.target.value);
                            }}
                        >
                            {timeframes.map((time) => (
                                <MenuItem key={time.value} value={time.value}>
                                    {time.value} Months
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        label="Electricity Used"
                        type="number"
                        id="outlined-start-adornment-electricity"
                        sx={{ m: 1, width: '300px' }}
                        value={electricityUsage}
                        onChange={(event) => {
                            handleNumericInputChange(event, setElectricityUsage);
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">kWh</InputAdornment>,
                        }}
                    />
                    <br /><br />
                    <Typography
                        marginLeft={2}
                        variant="h6"
                        sx={{ color: '#5e8c43', userSelect: "none", }}
                    >
                        ≈ <strong>{electricityUsageInCarbon.toFixed(2)}</strong>  kg CO2
                    </Typography>
                    <br />
                    <TextField
                        label="Gas Used"
                        type="number"
                        id="outlined-start-adornment-gas"
                        sx={{ m: 1, width: '300px', color: '#E88D2E', }}
                        value={gasUsage}
                        onChange={(event) => {
                            handleNumericInputChange(event, setGasUsage);
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">MJ</InputAdornment>,
                        }}
                    />
                    <br /><br />
                    <Typography
                        marginLeft={2}
                        variant="h6"
                        sx={{ color: '#5e8c43', userSelect: "none" }}
                    >
                        ≈ <strong>{gasUsageInCarbon.toFixed(2)}</strong> kg CO2
                    </Typography>
                    <div>
                    <Button onClick={handleEstimationBtnOnClick} style={{
                        marginTop: "24px",
                        marginBottom: "24px"
                    }} variant="contained" endIcon={<ArrowForwardIosIcon />} color="success">
                        Check Your Estimation
                    </Button>
                </div>
                </>
            </div>
        )
    }

    const addBtn = () => {
        return (
            <Button
                variant="contained"
                color="success"
                endIcon={<AddIcon />}
                onClick={handleAddButtonClick}
            >
                ADD
            </Button>
        )
    }
    const showActivitiesEntered = () => {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="activity table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Activity</TableCell>
                                <TableCell align="left">Time (hours)</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {inputtedActivities.map((activity: any, index: any) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {activity.activity}
                                    </TableCell>
                                    <TableCell align="left">{activity.hours}</TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => handleDeleteButtonClick(index)}
                                        >
                                            X
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
    const activityDropDownMenu = () => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column', // Stack children vertically
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {userInputTrackActivity()}
                <br /><br />
                {addBtn()}
                <br />
                {inputtedActivities.length > 0 && showActivitiesEntered()}
                {carbonCalculatedForActivities()}
            </div>
        )
    };
    const rightPanelImg = () => {
        return (
            <div style={{
                flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img
                    src={carbonFootprintLogo}
                    alt="carbonFootprintLogo"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <br />
                
            </div>
        );
    };
    const DividerWithText = ({ text }: any) => {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Divider style={{ flex: 1 }} />
                <Typography variant="body2" color="textSecondary" style={{ margin: '0 16px' }}>
                    {text}
                </Typography>
                <Divider style={{ flex: 1 }} />
            </div>
        );
    };
    const carbonCalculatedForActivities = () => {
        return (
            <div style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "18px"
            }}>
                <Typography sx={{ fontSize: "1.1rem", textAlign: "center" }}>
                    Total Carbon Footprint
                </Typography>
                <Typography sx={{ fontSize: "4rem", textAlign: "center" }}>
                    <span style={{ color: '#5e8c43' }}>
                        {resultActivityUsage.toFixed(2)}
                    </span>
                </Typography>
                <Typography
                    sx={{ fontSize: "1.3rem", color: '#252525', textAlign: "center" }}
                >
                    kg CO2
                </Typography>
                <div>
                    <Button onClick={handleEstimationBtnOnClick} style={{
                        marginTop: "24px",
                        marginBottom: "24px"
                    }} variant="contained" endIcon={<ArrowForwardIosIcon />} color="success">
                        Check Your Estimation
                    </Button>
                </div>
            </div>
        )
    };

    // topic: string, content: string, table:object, amount: string,
    const handleShareOnClick = () => {
        postMoment("Share the footprint", "Here are my details", {}, "10 12 30", "");
        console.log("post req sent");
    }

    // @ts-ignore
    const customCard = ({ value, description }) => {
        return (
            <>
                <Card
                    sx={{
                        py: 5,
                        boxShadow: 0,
                        textAlign: 'center',
                        color: '#5e8c43',
                        backgroundColor: '#fff8eb',
                        borderRadius: '20px',
                    }}
                >
                    <Typography variant="h3">{value}</Typography>
                    <Typography variant="subtitle2" sx={{ opacity: 0.72, color: '#252525' }}>
                        {description}
                    </Typography>
                </Card>
                <br />
            </>
        );
    }

    const tooltipFormatter = (value: number) => `${value}kg CO2`;

    const resultPage = () => {
        return (
            <>
                <div style={{ display: 'flex', width: '80%', height: '80%' }}>
                    <Container maxWidth="xl">
                        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                            Your <span style={{ color: theme.palette.success.main }}>Carbon Footprint</span> Estimation
                        </Typography>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                                <div style={{ flex: 1, padding: '10px', marginRight: '50px' }}>
                                    {((inputtedActivities.length === 0 && electricityUsage === 0 && gasUsage === 0) || (electricityUsage > 0 || gasUsage > 0)) && (
                                        <>
                                            <img
                                                src={resultPageImg}
                                                alt="resultPageImg"
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                            />
                                        </>)
                                    }

                                    {!(totalCarbonByBill > 0) && (
                                        <>
                                            <br />
                                            <BarChart
                                                width={450}
                                                height={300}
                                                data={inputtedActivities}
                                                barSize={15}
                                            >
                                                <XAxis
                                                    dataKey="activity"
                                                />
                                                <Tooltip formatter={tooltipFormatter} />
                                                <Bar dataKey="carbon" fill="#6a8d6d" background={{ fill: '#eee' }} />
                                            </BarChart>
                                            <br />
                                        </>
                                    )}

                                </div>
                                <div style={{ flex: 1, padding: '10px' }}>
                                    {customCard({
                                        value: largestCarbon,
                                        description: 'carbon emission per year',
                                    })}
                                    {customCard({
                                        value: planeRounds,
                                        description: 'approximate flights from Sydney to Melbourne',
                                    })}
                                    {customCard({
                                        value: lessThanAvg.toFixed(2),
                                        description: 'less than % average energy usage in Australia',
                                    })}

                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <br />
                                        <Button
                                            variant="contained"
                                            endIcon={<RestartAltIcon />}
                                            onClick={handleResetOnClick}
                                        >
                                            RESET
                                        </Button>
                                        <br />
                                        <Button
                                            variant="contained"
                                            endIcon={<ShareIcon />}
                                            onClick={handleShareOnClick}
                                        >
                                            Share With Community
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>
            </>)
    };

    const navigate = useNavigate();
    const onClickAvatar = () => {
        navigate('/profile');
    }

    return (
        <div className="carbonCalculator">
            <Header
                title={"Carbon Calculator"}
                left={
                    <Button href="/landing" variant="text">
                        Dashboard
                    </Button>
                }
                right={
                    <Avatar alt="Profile" src="/static/images/avatar/1.jpg" onClick={onClickAvatar} />}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {!showEstimation && (
                    <div style={{ display: 'flex', width: '800%', height: '100%' }}>
                        <div style={{ flex: 1, padding: '10px' }}>
                            <div style={{ width: '100%', height: '100%', border: 'none', padding: '10px', resize: 'none' }}>
                                {headerText()}
                                <DividerWithText text="●・○・●・○・●" />
                                <br />
                                {appBar()}
                                <Container maxWidth="md" style={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <br />
                                    {showActivityDropdown && activityDropDownMenu()}
                                    {showUtilityFields && userInputTrackUtilityBill()}
                                </Container>
                            </div>
                        </div>
                        {rightPanelImg()}
                    </div>
                )}
                {showEstimation && resultPage()}
            </div>
        </div>
    );
};

export default CarbonCalculator;