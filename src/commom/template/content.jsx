import React, {Component} from 'react'

import ContentHeader from '../commom/template/ContentHeader'
import Content from '../commom/template/content' 

class DashBoard extends Component {
    render(){
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content> 
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default DashBoard