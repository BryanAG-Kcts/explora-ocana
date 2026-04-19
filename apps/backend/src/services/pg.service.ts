import pgPromise from 'pg-promise'
import { environment } from '../server/environment'

export const pgp = pgPromise({ schema: 'exploraocanna' })
export const db = pgp({
  connectionString: environment.postgresUrl,
})

db.connect().then(async () => {
  console.log('Conectado a la base de datos', )
  // console.log(await db.one("SELECT * FROM users WHERE email = 'yade@gmail.com'"))
});

async function debugConexion() {
    try {
        const info = await db.one(`
            SELECT 
                current_database() AS base_de_datos,
                current_user AS usuario,
                inet_server_addr() AS host_ip,
                inet_server_port() AS puerto,
                version() AS version_postgres
        `);
        
        console.log('--- INFORMACIÓN DE CONEXIÓN ---');
        console.table(info);

        // Listar tablas disponibles para ver si "users" existe
        const tablas = await db.any(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'exploraocanna'
        `);
        
        console.log('--- TABLAS ENCONTRADAS EN ESQUEMA EXPLORAOCANNA ---');
        console.log(tablas.map(t => t.table_name));

    } catch (error) {
        console.error('Error al obtener info:', error);
    }
}

debugConexion();

