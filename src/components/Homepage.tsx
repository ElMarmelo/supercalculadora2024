import { Link } from "react-router-dom";
import "./homepagestyles.css";

export const Homepage = () => {
    return (
        <div className="rainbow w-screen h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl italic giradora">SUPER CALCULADORA 2024</h1>
            <div className="flex flex-row">
                <div className="flex-col p-8 items-center justify-center">
                    {" "}
                    <select className="w-36 bg-black justify-center items-center text-center border-white border-2 rounded-lg bg-opacity-70 h-12">
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                    <h1>Primeh 'ijito👆</h1>
                </div>
                <div className="flex-col p-8 items-center justify-center">
                    {" "}
                    <select className="w-36 bg-black justify-center items-center text-center border-white border-2 rounded-lg bg-opacity-70 h-12">
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                    <h1>2do dijito👆</h1>
                </div>
                <div className="flex-col p-8 items-center justify-center">
                    {" "}
                    <select className="w-36 bg-black justify-center items-center text-center border-white border-2 rounded-lg bg-opacity-70 h-12">
                        <option value={"+"}>+</option>
                        <option value={"-"}>-</option>
                        <option value={"*"}>*</option>
                        <option value={"/"}>/</option>
                        <option value={"%"}>%</option>
                    </select>
                    <h1>Kevasé primo?</h1>
                </div>
                <div className="flex-col p-8 items-center justify-center">
                    {" "}
                    <select className="w-36 bg-black justify-center items-center text-center border-white border-2 rounded-lg bg-opacity-70 h-12">
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                    <h1>Otra vez el primero 👇</h1>
                </div>
                <div className="flex-col p-8 items-center justify-center">
                    {" "}
                    <select className="w-36 bg-black justify-center items-center text-center border-white border-2 rounded-lg bg-opacity-70 h-12">
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                    <h1>Ya me cansé 🫃</h1>
                </div>
            </div>
            <div className="bg-black">
                <Link
                    className="text-5xl bg-black border-4 rainbow-text"
                    to={"/result"}
                    style={{ transition: "transform 0.2s" }}
                >
                    Super operación
                </Link>
            </div>
        </div>
    );
};
