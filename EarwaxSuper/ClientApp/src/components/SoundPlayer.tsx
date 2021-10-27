import * as React from 'react';

export interface SoundPlayerProps {
    select: string;
    currentstate: string;
}


export class SoundPlayer extends React.PureComponent<{}, SoundPlayerProps> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }
    // Notering är att på grund av säkerhet stuff så låter chrome och etc inte en att autospela ljud
    // Lösningen är att köra PWA och installera den på windows datorn
    public render() {
        return (
            <div>
                <img src="http://localhost/earwaxmedia/dog.jpg" ></img>
                <audio id="audioId" autoPlay>
                    <source src="http://localhost/earwaxmedia/prezofbank.mp3" type="audio/mp3"></source>
                </audio>
            </div>
        )
    }
}

export default SoundPlayer
