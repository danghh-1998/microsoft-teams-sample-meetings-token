import React, { Component } from 'react';

import { withMeetingTokenService } from '../Context/MeetingServiceProvider';
import TokenIndicator from "../Components/TokenIndicator";
import StatusRefresher from "../Components/StatusRefresher";

class PreMeeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToken: 0,
            maxTokenIssued: 0,
            participantCount: "0",
        }
    }
    
    onStatusRefresh = ({ success, msg: data }) => {
        if (!success) {
            this.props.onError(data);
            return;
        }
        const { MeetingMetadata: { CurrentToken, MaxTokenIssued }, UserTokens} = data;
        this.setState({
            currentToken: UserTokens.length > 0 ? CurrentToken : "N/A",
            maxTokenIssued: MaxTokenIssued,
            participantCount: (UserTokens.length || "0"),
        });
    }
    
    render() {
        return (
            <div className="app-container" >
                <StatusRefresher onStatusRefresh={this.onStatusRefresh} />
            </div>
        );
    }
}

export default withMeetingTokenService(PreMeeting);
