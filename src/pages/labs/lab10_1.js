import Clock from "../../components/Clock";
import {Calendar} from "../../components/Calendar";
import {NameForm} from "../../components/Form";



export function Lab10_1() {
    function handleSubmit(e) {
        // e.preventDefault();
        console.log('Отправлена форма.');
    }

    return (
        <div>
            Часы:
            <Clock/>
            Календарь
            <Calendar/>

            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <button type="submit">Отправить</button>*/}
            {/*</form>*/}
            {/*<button onClick={handleSubmit}>*/}

            {/*</button>*/}
            <NameForm></NameForm>

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