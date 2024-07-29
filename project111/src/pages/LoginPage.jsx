// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// const LoginPage = () => {
//   const { login, users } = useAuth(); // Get login and users from context
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState({ email: false, password: false, login: '' });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     // Reset error messages
//     setError({ email: false, password: false, login: '' });

//     // Validate email format
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//       setError(prev => ({ ...prev, email: true }));
//       return;
//     }

//     // Check if email and password are provided
//     if (email && password) {
//       try {
//         // Check if user is registered and password matches
//         const user = users.find(user => user.email === email);
//         if (user && user.password === password) {
//           login();
//           navigate('/'); // Redirect to the home page after login
//         } else {
//           setError(prev => ({ ...prev, login: 'Invalid credentials or user not registered.' }));
//         }
//       } catch (error) {
//         setError(prev => ({ ...prev, login: 'Login failed. Try again.' }));
//       }
//     } else {
//       setError({
//         email: !email,
//         password: !password,
//         login: ''
//       });
//     }
//   };

//   return (
//     <Box
//     sx={{marginRight:155}}>
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '100%' },
//         display: "flex",
//         justifyContent: 'center',
//         alignItems: "center",
//         flexDirection: "column",
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100vh',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//         zIndex: 1000
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: 400,
//           padding: 4,
//           backgroundColor: '#fff',
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>LOGIN</Typography>
//         <TextField
//           id="email"
//           label="Email"
//           variant="outlined"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           error={error.email}
//           helperText={error.email && "Enter a valid email"}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           id="password"
//           type="password"
//           label="Password"
//           variant="outlined"
//           value={formData.password}
//           onChange={handleChange}
//           error={error.password}
//           helperText={error.password && "Fill in the password"}
//           fullWidth
//           margin="normal"
//         />
//         <Button sx={{ width: '100%', mt: 2 }} variant="contained" type="submit">SUBMIT</Button>
//         {error.login && (
//           <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//             {error.login}
//           </Typography>
//         )}
//         <Typography sx={{ mt: 2, textAlign: 'center' }}>
//           Don't have an Account?<Link to="/register">Register</Link>
//         </Typography>
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// // export default LoginPage;
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// const LoginPage = () => {
//   const { login, users } = useAuth(); // Get login and users from context
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState({ email: false, password: false, login: '' });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     // Reset error messages
//     setError({ email: false, password: false, login: '' });

//     // Validate email format
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//       setError(prev => ({ ...prev, email: true }));
//       return;
//     }

//     // Check if email and password are provided
//     if (email && password) {
//       try {
//         // Check if user is registered and password matches
//         const user = users.find(user => user.email === email);
//         if (user && user.password === password) {
//           login();
//           navigate('/'); // Redirect to the home page after login
//         } else {
//           setError(prev => ({ ...prev, login: 'Invalid credentials or user not registered.' }));
//         }
//       } catch (error) {
//         setError(prev => ({ ...prev, login: 'Login failed. Try again.' }));
//       }
//     } else {
//       setError({
//         email: !email,
//         password: !password,
//         login: ''
//       });
//     }
//   };

//   return (
//     <Box
//     sx={{marginRight:155}}>
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '100%' },
//         display: "flex",
//         justifyContent: 'center',
//         alignItems: "center",
//         flexDirection: "column",
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100vh',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//         zIndex: 1000
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: 400,
//           padding: 4,
//           backgroundColor: '#fff',
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>LOGIN</Typography>
//         <TextField
//           id="email"
//           label="Email"
//           variant="outlined"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           error={error.email}
//           helperText={error.email && "Enter a valid email"}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           id="password"
//           type="password"
//           label="Password"
//           variant="outlined"
//           value={formData.password}
//           onChange={handleChange}
//           error={error.password}
//           helperText={error.password && "Fill in the password"}
//           fullWidth
//           margin="normal"
//         />
//         <Button sx={{ width: '100%', mt: 2 }} variant="contained" type="submit">SUBMIT</Button>
//         {error.login && (
//           <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//             {error.login}
//           </Typography>
//         )}
//         <Typography sx={{ mt: 2, textAlign: 'center' }}>
//           Don't have an Account?<Link to="/register">Register</Link>
//         </Typography>
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// export default LoginPage;

// src/components/LoginPage.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: false, password: false, login: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Reset error messages
    setError({ email: false, password: false, login: '' });

    // Validate email format
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError(prev => ({ ...prev, email: true }));
      return;
    }

    // Check if email and password are provided
    if (email && password) {
      try {
        login(email, password);
        navigate('/'); // Redirect to the home page after login
      } catch (error) {
        setError(prev => ({ ...prev, login: 'Invalid credentials or user not registered.' }));
      }
    } else {
      setError({
        email: !email,
        password: !password,
        login: ''
      });
    }
  };

  return (
    <Box sx={{ marginRight: 155 }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          flexDirection: "column",
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          zIndex: 1000
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            padding: 4,
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>LOGIN</Typography>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={error.email}
            helperText={error.email && "Enter a valid email"}
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            error={error.password}
            helperText={error.password && "Fill in the password"}
            fullWidth
            margin="normal"
          />
          <Button sx={{ width: '100%', mt: 2 }} variant="contained" type="submit">SUBMIT</Button>
          {error.login && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error.login}
            </Typography>
          )}
          <Typography sx={{ mt: 2, textAlign: 'center' }}>
            Don't have an Account?<Link to="/register">Register</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
