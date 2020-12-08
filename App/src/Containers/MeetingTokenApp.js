import React, { Component, Fragment } from 'react';

import SurfaceSelector from './SurfaceSelector';
import MeetingServiceProvider from '../Context/MeetingServiceProvider';
import TeamsContextProvider from '../Context/TeamsContextProvider';

//this is component meeting token app
class MeetingTokenApp extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <MeetingServiceProvider>
                    <TeamsContextProvider>
                        <SurfaceSelector />
                    </TeamsContextProvider>
                </MeetingServiceProvider>
            </Fragment>
        );
    }
}

export default MeetingTokenApp;