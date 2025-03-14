// frontend/src/components/Analytics.js
import { Bar } from 'react-chartjs-2';

const MoodWeightChart = ({ data }) => (
  <Bar data={{
    labels: data.map(d => d.date),
    datasets: [{
      label: 'Gewicht (kg)',
      data: data.map(d => d.weight),
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
      label: 'Stimmung (1-3)',
      data: data.map(d => ({gut: 1, neutral: 2, schlecht: 3}[d.mood])),
      backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }]
  }} />
);
