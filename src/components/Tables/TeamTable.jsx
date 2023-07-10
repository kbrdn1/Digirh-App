import ProgressBar from "../ProgressBars/ProgressBar";
import TeamTableBadge from "./TeamTableBadge";
import { useState } from "react";
import { TableActions } from "../Buttons/TableActions";
const TeamTable = () => {
    const [activeActions, setActiveActions] = useState(-1);

    const toggleActions = (index) => {
        if (activeActions === index) {
            setActiveActions(-1);
        } else {
            setActiveActions(index);
        }
    }
    return (
        <div className={`relative w-full mt-20 font-franklin`}>
            <h1 className="w-[calc(100%-2rem)] mx-auto absolute -top-10 inset-x-0 bg-gradient-to-r from-primary to-primary-5 px-3 py-5 rounded-xl text-white items-center justify-start hidden shadow-xl sm:flex">
                Equipes
            </h1>
            <table className="w-full text-left h-full bg-white rounded-xl shadow-sm">
                <thead >
                    <tr className="font-normal text-gray-5 text-xs">
                        <th scope="col" className="px-6 pb-4 pt-14">
                            Equipes
                        </th>
                        <th scope="col" className="px-6 pb-4 pt-14">
                            Deplacements
                        </th>
                        <th scope="col" className="px-6 pb-4 pt-14">
                            Effectif
                        </th>
                        <th scope="col" className="px-6 pb-4 pt-14">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-light-2 text-sm">
                        <td className="px-6 py-4" style={{ minWidth: '200px' }}>
                            <TeamTableBadge teamName={'Design'} color={'#DF84CB'} />
                        </td>
                        <td className="px-6 py-4">
                            14000€
                        </td>
                        <td className="px-6 py-4">
                            <ProgressBar progress={100} />
                        </td>
                        <td className="px-6 py-4 text-right" style={{ width: '150px' }}>
                            <TableActions />
                        </td>
                    </tr>
                    <tr className="border-t border-light-2">
                        <td className="px-6 py-4" style={{ minWidth: '200px' }}>
                            <TeamTableBadge teamName={'Web Développement'} color={'#84DFC4'} />
                        </td>
                        <td className="px-6 py-4">
                            14000€
                        </td>
                        <td className="px-6 py-4">
                            <ProgressBar progress={100} />
                        </td>
                        <td className="px-6 py-4 text-right" style={{ width: '150px' }}>
                            <TableActions />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default TeamTable;