import Clock from "../../components/Clock";
import {Calendar} from "../../components/Calendar";
import {NameForm} from "../../components/Forms/Form";



export function Lab10_1() {
    // alert('yep');
    return (
        <div>
            Часы:
            <Clock/>
            Календарь
            <Calendar/>

            <NameForm/>

            <div className='b-marquee'>
                Реклама
                <div className="b-marquee__text">
                    8 800 555 35 35 <br/>
                    Проще позвонить, чем у кого-то занимать
                </div>
            </div>
        </div>
    )
}