import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { getUser } from '../../utils/storage';

function Index() {
    const params: any  = useParams();

    const roomID: string = params.roomID;
    
    const meeting = async(element: any) => {
        const appID = 1154514146;
        let user:any = getUser();

        const serverSecret = "4b7487ffb9e37184359de2163ac9f7b9";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), `${user?.username}`);

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element, 
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, 
              },
        });
    }


    return (
        <div className="myCallContainer"
            ref={meeting}
            style={{ width: '100vw', height: '100vh' }}>
          
        </div>  
    );
}

export default Index; 

