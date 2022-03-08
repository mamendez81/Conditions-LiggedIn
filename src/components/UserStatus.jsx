import React, { useState } from "react";

function UserStatus() {
    const [ isLoggedIn ] = useState(true);
    const [ userName ] = useState('eoviedo');

    //1. if / else

//     if (isLoggedIn) {
//         return (
//             <div>
//                 Welcome dear user
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 Login
//             </div>
//         )
//     }

//     //2. if ternario
// return(
//     isLoggedIn ?
//     <div>
//         Welcome {userName}
//     </div>
//     :
//     <div>
//         Login
//     </div>
// );
// //3. variable

// let status;
// if (isLoggedIn) {
//     status = <div>Welcome {userName}</div>
// } else {
//     status = <div>Login</div>
// }
// return status;

// //4. logic operator

// return (isLoggedIn && (
//     <div>
//         Welcome {userName}
//     </div>
// )) || (
//     <div>
//         Login
//     </div>
// );

//5. in line

return (
    <div>
       { isLoggedIn ? (
           <span>Welcome {userName}</span>
       ) : (
        <span>Login</span>
       )}
    </div>
);

}







export default UserStatus;