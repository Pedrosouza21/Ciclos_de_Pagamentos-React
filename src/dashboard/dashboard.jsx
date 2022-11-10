import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from "./dasboardActions";
import ContentHeader from "../commom/template/contentHeader";
import Content from "../commom/template/content";
import ValueBox from "../commom/widget/valueBox";
import Row from "../commom/template/layout/row";


class DashBoard extends Component {
    
    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        const { credit, debt } = this.props.summary

        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content> 
                    <Content>
                        <Row>
                            <ValueBox cold ='12 4' color='green' icon='bank'
                                value = {`R$ ${credit}`}
                                 text='Total de Créditos ' />
                            <ValueBox cols= '12 4' color='red' icon='credit-card'
                                value={`R$ ${debt}`} text=' Total de Débitos' />
                            <ValueBox  cols= '12 4' color='blue' icon='money'
                                value={`R$ ${credit - debt}`} text= 'Valor Consolidado' />
                        </Row>
                        
                    </Content>
                </Content>
            </div>
        )
    }
}

const mapStatetoProps = state => ({summary: state.DashBoard.summary})
const mapDispacthToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect (mapStatetoProps, mapDispacthToProps) (DashBoard)