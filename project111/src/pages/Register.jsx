



// // Register.jsx
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState({ name: false, email: false, password: false, register: '' });
//   const navigate = useNavigate();
//   const { register } = useAuth(); // Get the register function from context

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, password } = formData;

//     if (name && email && password) {
//       if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//         setError({ name: false, email: true, password: false, register: '' });
//       } else {
//         setError({ name: false, email: false, password: false, register: '' });
//         try {
//           register({ name, email, password }); // Call register function with form data
//           navigate('/login'); // Redirect to login page after successful registration
//         } catch (error) {
//           setError({ name: false, email: false, password: false, register: 'Registration failed. Try again.' });
//         }
//       }
//     } else {
//       setError({
//         name: !name,
//         email: !email,
//         password: !password,
//         register: ''
//       });
//     }
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '65ch' },
//         display: "flex",
//         justifyContent: 'center',
//         alignItems: "center",
//         flexDirection: "column",
//         width: '100%',
//         height: '100vh',


//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <Typography sx={{ textAlign: 'center' }} variant='h4'>REGISTER</Typography>
//       <Box >
        
//         <TextField
//           id="name"
//           label="Name"
//           variant="outlined"
//           value={formData.name}
//           onChange={handleChange}
//           error={error.name}
//           helperText={error.name && "Fill in the name"}
//         />
//       </Box>
//       <Box>
//         <TextField
//           id="email"
//           label="Email"
//           variant="outlined"
//           value={formData.email}
//           onChange={handleChange}
//           error={error.email}
//           helperText={error.email && "Fill in a valid email"}
//         />
//       </Box>
//       <Box>
//         <TextField
//           id="password"
//           type="password"
//           label="Password"
//           variant="outlined"
//           value={formData.password}
//           onChange={handleChange}
//           error={error.password}
//           helperText={error.password && "Fill in the password"}
//         />
//       </Box>
//       <Button variant="contained" type="submit">SUBMIT</Button>
//       {error.register && (
//         <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//           {error.register}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState({ name: false, email: false, password: false, register: '' });
//   const navigate = useNavigate();
//   const { register } = useAuth(); // Get the register function from context

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, password } = formData;

//     if (name && email && password) {
//       if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//         setError({ name: false, email: true, password: false, register: '' });
//       } else {
//         setError({ name: false, email: false, password: false, register: '' });
//         try {
//           register({ name, email, password }); // Call register function with form data
//           navigate('/login'); // Redirect to login page after successful registration
//         } catch (error) {
//           setError({ name: false, email: false, password: false, register: 'Registration failed. Try again.' });
//         }
//       }
//     } else {
//       setError({
//         name: !name,
//         email: !email,
//         password: !password,
//         register: ''
//       });
//     }
//   };

//   return (
//     <Box 
//     sx={{marginRight:154}}>
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
//         <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h4'>REGISTER</Typography>
//         <TextField
//           id="name"
//           label="Name"
//           variant="outlined"
//           value={formData.name}
//           onChange={handleChange}
//           error={error.name}
//           helperText={error.name && "Fill in the name"}
//           fullWidth
//           margin="normal"
//         />
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
//         <TextField
//           id="password"
//           type="password"
//           label="Confirm Password"
//           variant="outlined"
//           value={formData.password}
//           onChange={handleChange}
//           error={error.password}
//           helperText={error.password && "Fill in the password"}
//           fullWidth
//           margin="normal"
//         />
        
//         <Button sx={{ width: '100%', mt: 2 }} variant="contained" type="submit">SUBMIT</Button>
//         {error.register && (
//           <Typography color="error" variant="body2" sx={{ mt: 2 }}>
//             {error.register}
//           </Typography>
//         )}
//         <Typography sx={{ mt: 2, textAlign: 'center' }}>
//           Already have an account? <Link to="/login">Login</Link>
//         </Typography>
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// export default Register;
// src/components/RegisterPage.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState({ name: false, email: false, password: false, register: '' });
  const navigate = useNavigate();
  const { register } = useAuth(); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = formData;

    if (name && email && password) {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        setError({ name: false, email: true, password: false, register: '' });
      } else {
        setError({ name: false, email: false, password: false, register: '' });
        try {
          register({ name, email, password, role });
          navigate('/login');
        } catch (error) {
          setError({ name: false, email: false, password: false, register: 'Registration failed. Try again.' });
        }
      }
    } else {
      setError({
        name: !name,
        email: !email,
        password: !password,
        register: ''
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={handleChange}
          error={error.name}
          helperText={error.name ? 'Name is required' : ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          error={error.email}
          helperText={error.email ? 'Enter a valid email address' : ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          error={error.password}
          helperText={error.password ? 'Password is required' : ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="role"
          label="Role"
          type="text"
          id="role"
          autoComplete="role"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
        {error.register && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {error.register}
          </Typography>
        )}
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
