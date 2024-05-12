import Table from 'react-bootstrap/Table';
import data from "../data.json"
import { useState } from 'react';


const Data = () => {


    const [jsonData, setJsonData] = useState(data)








    const topbar = [
        { name: "#" },
        { name: "FLIGHT" },
        { name: "AIRCRAFT" },
        { name: "CLASS" },
        { name: "FARE" },
        { name: "ROUTE" },
        { name: "DEPARTUERE" },
        { name: "ARRIVAL" },
        { name: "" },
        { name: "DURATION" },
        { name: "PRICE" },
    ]



    return (

        <>

            {/* <div className="flex flex-wrap mx-6 mb-6">
                <div className="w-full md:w-[12%] px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        First Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                </div>
                <div className="w-full md:w-[12%] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-[12%] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-[12%] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-[12%] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-[12%] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-[12%] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-[12%] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                    </label>
                    <input className="appearance-none block w-[60%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div> */}


            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {data.flightOffer.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.itineraries[0].segments[0].departure.iataCode}</td>
                            <td>{item.itineraries[0].duration}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table> */}



            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Departure IATA Code</th>
                        <th>Arrival IATA Code</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.flightOffer.map((flight, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{flight.itineraries[0].segments[0].departure.iataCode}</td>
                            <td>{flight.itineraries[0].segments[1].arrival.iataCode}</td>
                            <td>{flight.itineraries[0].duration}</td>
                            <td>{flight.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table> */}

            <div className="overflow-y-auto max-h-screen">



                <h1 className='font-normal text-2xl py-1'>Data Parsed Sccuessfully</h1>




                <Table className="min-w-full bg-black border-collapse">
                    <thead className="bg-cyan-900 text-white sticky top-0">



                        <tr>
                            {topbar.map((item, index) => (
                                <th key={index} className="px-6 py-3">
                                    {item.name}
                                </th>
                            ))}
                        </tr>

                        {/* <tr>


                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">FLIGHT</th>
                            <th className="px-6 py-3">AIRCRAFT</th>
                            <th className="px-6 py-3">CLASS</th>
                            <th className="px-6 py-3">FARE</th>
                            <th className="px-6 py-3">Route</th>
                            <th className="px-6 py-3">Departure </th>
                            <th className="px-6 py-3">Arrival </th>
                            <th className="px-6 py-3"></th>
                            <th className="px-6 py-3">Duration</th>
                            <th className="px-6 py-3">Price</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {data.flightOffer.map((flight, index) => (
                            <tr key={index} className="bg-blue-50 text-[#172554]">
                                <td className="border text-[#172554] px-6 py-4">{index + 1}</td>

                                {/* FLIGHT */}

                                <td className="border  px-6 py-4">
                                    {/* {flight.itineraries[0].segments[0].carrierCode} {flight.itineraries[0].segments[0].aircraft}

                                    <br />
                                    {flight.itineraries[0].segments[1].carrierCode} {flight.itineraries[0].segments[1].aircraft} */}

                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {segment.carrierCode} {segment.aircraft} <br />
                                        </div>
                                    ))}
                                </td>


                                {/* AIRCRAFT */}


                                <td className="border  px-6 py-4">
                                    {/* {flight.itineraries[0].segments[0].flightNumber}
                                    <br />
                                    {flight.itineraries[0].segments[1].flightNumber} */}

                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {segment.flightNumber}
                                        </div>
                                    ))}





                                </td>


                                {/* ClASS */}


                                <td className="border  px-6 py-4">
                                    {/* {flight.class[0][0]}
                                    <br />
                                    {flight.class[0][1]}
                                    <br />
                                    {flight.class[0][2]} */}


                                    {flight.class[0].map((item, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {item}
                                        </div>
                                    ))}

                                </td>

                                {/* FARE */}


                                <td className="border  px-6 py-4">
                                    {/* {flight.fareBasis[0][0]}
                                    <br />
                                    {flight.fareBasis[0][1]} */}

                                    {flight.fareBasis[0].map((item, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {item}
                                        </div>
                                    ))}
                                </td>


                                {/* ROUTE-iateCode */}


                                <td className="border  px-6 py-4">
                                    {/* {flight.itineraries[0].segments[0].departure.iataCode}-{flight.itineraries[0].segments[0].arrival.iataCode}
                                    <br />
                                    {flight.itineraries[0].segments[1].departure.iataCode}-{flight.itineraries[0].segments[1].arrival.iataCode} */}

                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {segment.departure.iataCode} - {segment.arrival.iataCode}
                                        </div>
                                    ))}
                                </td>


                                {/* DEPARTURE */}


                                <td className="border  px-6 py-4">
                                    {/* {flight.itineraries[0].segments[0].departure.at}
                                    <br />
                                    {flight.itineraries[0].segments[1].departure.at} */}

                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {segment.departure.at}
                                        </div>
                                    ))}
                                </td>


                                {/* ARRIVAL */}

                                <td className="border  px-6 py-4">
                                    {/* {flight.itineraries[0].segments[0].arrival.at}
                                    <br />
                                    {flight.itineraries[0].segments[1].arrival.at} */}

                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {segment.arrival.at}
                                        </div>
                                    ))}
                                </td>


                                <td className="border  px-6 py-4">
                                    ---------
                                    <br />
                                    ---------
                                </td>

                                {/* DURATION */}
                                <td className="border  px-6 py-4">
                                    {/* {flight.itineraries[0].duration} */}

                                    {flight.itineraries.map((item, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {item.duration}
                                        </div>
                                    ))}
                                </td>


                                {/* PRICING */}
                                <td className="border text-center  px-6 py-4">
                                    {flight.price}
                                    <br />
                                    <button className="bg-blue-950  hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                                        Select
                                    </button>






                                    {/* {flight.price[0].map((item, segmentIndex) => (
                                        <div key={segmentIndex}>
                                            {}
                                        </div>
                                    ))} */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>







        </>
    )
}

export default Data