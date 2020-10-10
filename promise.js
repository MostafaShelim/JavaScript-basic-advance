// var hasMeeting = true;
// const promise = new Promise((resolve, reject) => {
//     if(!hasMeeting){
//         const meetingDetails = {
//             name: "technical meeting",
//             location: "chittagong",
//             id: 2012,
//         };
//         resolve(meetingDetails);
//     }else{
//         reject(new Error("meeting already scheduled"));
//     }
// });
// const addToCalendar = (meetingDetails) =>{
//     const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.location}`;
//     return Promise.resolve(calendar);
// }

// // promise
// //     .then(addToCalendar)//nested promise
// //     .then((res)=>{
// //         //resolve
// //         console.log(JSON.stringify(res));
// //     })
// //     .catch((err)=>{
// //         //reject
// //         console.log(err.message)
// //         })

// // const promise1 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         resolve('promise 1 resolved');
// //     },2000)
// // });
// // const promise2 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         resolve('promise 2 resolved');
// //     },1000)
// // });

// async function myMeeting(){
//     try{
//         const meetingDetails = await promise;
//         const calendar = await addToCalendar(meetingDetails);
//         console.log(calendar);
//     }catch{
//         console.log("something wrong happended");
//     }
// };

// myMeeting();
const hasMeeting = false;
const meeting = new Promise((resolve, reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name: 'girlfriend',
            location: 'sajek',
            time: '2022-2-14'
        };
        resolve(meetingDetails);
    }else{
        reject(new Error('no time'));
    }
});
const addToCalendar = (meetingDetails)=>{
    const calendar = `${meetingDetails.name} is waiting for me on ${meetingDetails.location}`;    
    return Promise.resolve(calendar);
}
async function myMeeting(){
    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }catch{
        console.log("something wrong");
    }
}
myMeeting();