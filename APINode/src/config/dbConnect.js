import { Sequelize } from 'sequelize';

async function conectaNaDatabase() {
  const sequelize = new Sequelize('2025_jessFit', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    await sequelize.authenticate();
    console.log('Conectado ao MySQL!');
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error);
  }

  return sequelize;
}

export default conectaNaDatabase;
