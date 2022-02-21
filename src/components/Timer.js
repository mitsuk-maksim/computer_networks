import React, {useEffect, useState} from 'react';
import {Button, Result} from "antd";

export function Timer(props) {
    const [seconds, setSeconds] = useState(props.seconds);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 1000, seconds - 1);
        } else {
            setTimerActive(false);
        }
    }, [seconds, timerActive]);


    return (
        <div>
            {seconds
                ? <React.Fragment>
                    <Button onClick={() => setTimerActive(!timerActive)}>
                        {timerActive ? 'stop' : 'Начать тестирование'}
                    </Button>
                    <div>Осталось секунд: {seconds}</div>
                </React.Fragment>
                // : <button onClick={() => setSeconds(60)}>ещё раз</button>
                : <Result
                    status="warning"
                    title="Ответы больше не принимаются"
                    extra={
                        <Button type="primary" key="console" onClick={() => window.location.reload(false)}>
                            Начать заново
                        </Button>
                    }
                />
            }
        </div>
    );
}

// export default Clock;