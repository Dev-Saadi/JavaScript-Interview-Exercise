import Table from 'react-bootstrap/Table';
import data from "../data.json"



const Data = () => {


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


            <div>

                <h1 className='font-normal text-2xl py-1'>Data Parsed Sccuessfully</h1>


                <Table className="min-w-full">

                    <thead className="bg-cyan-900 text-white sticky top-0">
                        <tr>
                            {topbar.map((item, index) => (
                                <th key={index} className="px-6 py-3">
                                    {item.name}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {data.flightOffer.map((flight, index) => (
                            <tr key={index} className="bg-blue-50 text-[#172554]">
                                <td className="border text-[#172554] px-6 py-4">{index + 1}</td>

                                {/* FLIGHT */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.carrierCode} {segment.aircraft} <br />
                                        </p>
                                    ))}
                                </td>


                                {/* AIRCRAFT */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.flightNumber}
                                        </p>
                                    ))}
                                </td>


                                {/* ClASS */}

                                <td className="border  px-6 py-4">
                                    {flight.class[0].map((item, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {item}
                                        </p>
                                    ))}

                                </td>

                                {/* FARE */}

                                <td className="border  px-6 py-4">
                                    {flight.fareBasis[0].map((item, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {item}
                                        </p>
                                    ))}
                                </td>


                                {/* ROUTE-iateCode */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.departure.iataCode} - {segment.arrival.iataCode}
                                        </p>
                                    ))}
                                </td>


                                {/* DEPARTURE */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.departure.at}
                                        </p>
                                    ))}
                                </td>


                                {/* ARRIVAL */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries[0].segments.map((segment, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {segment.arrival.at}
                                        </p>
                                    ))}
                                </td>


                                <td className="border  px-6 py-4">
                                    ---------
                                    <br />
                                    ---------
                                </td>

                                {/* DURATION */}

                                <td className="border  px-6 py-4">
                                    {flight.itineraries.map((item, segmentIndex) => (
                                        <p key={segmentIndex}>
                                            {item.duration}
                                        </p>
                                    ))}
                                </td>


                                {/* PRICING */}

                                <td className="border text-center  px-6 py-4">
                                    {flight.price}
                                    <br />
                                    <button className="bg-blue-950  hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                                        Select
                                    </button>
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