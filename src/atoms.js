import {atom,selector} from "recoil";


export const meAtom = atom({
    key:"meAtom",
    default:0
})
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})
export const messageAtom = atom({
    key:"messageAtom",
    default:99
})
export const networkAtom = atom({
    key:"networkAtom",
    default:14
})
export  const notificationAtom=atom({
    key:"notificationAtom",
    default:102
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkNotificationCount=get(networkAtom); // it takes the current value of network atom
        const notificationCount=get(notificationAtom);
        const jobsNotificationCount=get(jobsAtom);
        const messagingNotificationCount=get(messageAtom);
        return networkNotificationCount+jobsNotificationCount+messagingNotificationCount+notificationCount;
    }
})