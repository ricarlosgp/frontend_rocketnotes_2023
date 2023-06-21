import { BrowserRouter } from 'react-router-dom'; //importando o BrowserRouter do react-router-dom. O BrowserRouter é um componente fornecido pela biblioteca React Router, que é usada para criar roteamento em aplicativos React. O React Router é uma biblioteca popular que permite criar aplicativos de página única (SPA) com navegação baseada em rotas.

import { AppRoutes } from './app.routes'; //importando o AppRoutes que foi exportado na rota de aplicação ou app.routes.jsx
import { AuthRoutes } from './auth.routes'; //importando o AuthRoutes que foi exportado na rota de autenticação ou auth.routes.jsx

export function Routes(){ //criando e exportando uma função chamada de Routes que vai me retornar o BrowserRouter (importado lá em cima) e AppRoutes
    return (
        <BrowserRouter>
            {/*<AppRoutes /> {/*estou comentando o AppRoutes para eu renderizar o AuthRoutes */}
            <AuthRoutes /> {/*estou comentando o AuthRoutes para eu renderizar o AppRoutes */}
        
        </BrowserRouter>
    )
}