
import "./style/content-list.css";
import Backlog from "./Backlog";
import Progress from "./Progress";
import Done from "./Done";

import { useState } from "react";

const ContentList = () => {

    const [backlog, setBacklog] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);
    

    return (
        <div className="content-list">
            <div className="backlog">
                <h3>Pendiente</h3>
                <Backlog backlog={backlog} setBacklog={setBacklog} progress={progress} setProgress={setProgress}></Backlog>
            </div>
            <div className="pro">
                <h3>En Desarrollo</h3>
                <Progress progress={progress} setProgress={setProgress} done={done} setDone={setDone}></Progress>
            </div>
            <div className="done">
                <h3>Finalizado</h3>
                <Done done={done} setDone={setDone} ></Done>
            </div>
        </div>
    )
}

export default ContentList;