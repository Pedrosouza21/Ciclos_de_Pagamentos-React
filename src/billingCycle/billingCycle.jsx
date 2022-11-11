import React, { Component} from 'react '

import Content from '../commom/template/content'
import ContentHeader from '../commom/template/contentHeader'

class BillingCycle extends Component {
    render() {
        return (
            <div> 
                <ContentHeader title= 'Ciclos de Pagamentos' small='Cadastro'/>
                <Content>
                    Ciclos de Pagamentos
                </Content>
            </div>
        )
    }
}

export default BillingCycle