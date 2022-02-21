import {TestForm} from "../../components/Forms/TestForm";
import {Timer} from "../../components/Timer";

export function Lab13_1() {
    return (
        <div>
            <TestForm/>
            <Timer seconds={25} />
        </div>
    )
}