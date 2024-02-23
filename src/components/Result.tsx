import etto from "../assets/ah-eto-bleh-anime.gif";
import aprete from "../assets/aprete.jpg";
import ye from "../assets/kanyeast.jpg";

export const Result = () => {
    return (
        <div
            className="flex flex-col w-screen h-screen space-y-8 justify-center items-center"
            style={{ backgroundImage: `url(${ye})` }}
        >
            <h1 className="text-5xl italic">Syntax error</h1>
            <img width={300} src={etto} alt="" />
            <img src={aprete} width={500} />
        </div>
    );
};
