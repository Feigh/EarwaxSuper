import * as React from 'react';

export interface SoundPlayerProps {
    select: string;
    currentstate: string;
}


export class SoundPlayer extends React.PureComponent<{}, SoundPlayerProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <img src="http://192.168.1.198/EarwaxSuperImage/song.jpg" ></img>
            </div>
        )
    }

}

export default SoundPlayer
