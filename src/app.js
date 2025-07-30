const express = require('express');
const app = express();
const { sequelize } = require('./models');
const solicitudRoutes = require('./routes/solicitudRoutes');
const trabajadorRoutes = require('./routes/trabajadorRoutes');

app.use(express.json());

// Rutas
app.use('/solicitudes', solicitudRoutes);
app.use('/trabajadores', trabajadorRoutes);

app.get('/', (req, res) => {
  res.send('API Gestión de Vacaciones - Servidor OK');
});

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.sync({ force: false }); 
    console.log('Base de datos sincronizada');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}

main();
