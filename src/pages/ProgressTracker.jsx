import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Chip 
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
} from 'recharts';

const ProgressPage = () => {
  const { t } = useTranslation();
  const [progressData] = useState({
    'p': 75,
    'b': 50,
    'm': 90,
    't': 30,
    'd': 10
  });

  const sounds = Object.keys(progressData);

  const pieData = [
    {
      name: 'Mastered',
      value: sounds.filter(s => progressData[s] >= 80).length,
      color: '#4caf50'
    },
    {
      name: 'Practicing',
      value: sounds.filter(s => progressData[s] >= 50 && progressData[s] < 80).length,
      color: '#ff9800'
    },
    {
      name: 'Needs Work',
      value: sounds.filter(s => progressData[s] < 50).length,
      color: '#f44336'
    }
  ];

  return (
    <Box
      sx={{
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        backgroundImage: 'url("/assets/img/ArticulationBg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100%',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto, sans-serif',
        margin: 0,
        border: 'none',
        boxShadow: 'none',
        overflow: 'auto'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'primary.main', mb: 4 }}>
        {t('progress.title')}
      </Typography>

      {/* Summary Box */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        mb: 4,
        backgroundColor: '#fff3e0',
        padding: 2,
        borderRadius: 2,
        boxShadow: 1
      }}>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">Total Sounds</Typography>
          <Typography variant="h6">{sounds.length}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">Mastered</Typography>
          <Typography variant="h6" color="success.main">
            {pieData[0].value}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">Practicing</Typography>
          <Typography variant="h6" color="warning.main">
            {pieData[1].value}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">Needs Work</Typography>
          <Typography variant="h6" color="error.main">
            {pieData[2].value}
          </Typography>
        </Box>
      </Box>

      {/* Pie Chart */}
      <Box sx={{ width: 300, height: 280, alignSelf: 'center' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProgressPage;
