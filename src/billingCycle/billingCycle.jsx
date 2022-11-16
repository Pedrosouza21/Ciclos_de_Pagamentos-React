import React, { Component } from "react ";
import { bindActionCreators } from 'react-redux'
import { connect } from 'react-redux'

import Content from "../commom/template/content";
import ContentHeader from "../commom/template/contentHeader";
import Tabs from "../commom/tab/tabs";
import TabsContent from "../commom/tab/tabsContent";
import TabsHeader from "../commom/tab/tabsHeader";
import TabHeader from "../commom/tab/tabHeader";
import TabContent from "../commom/tab/tabContent";
import {selectTab } from '../commom/tab/tabActions'

class BillingCycle extends Component {

  componentWillMount(){
    this.props.selectTab('tabList')
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'><h1>Lista</h1></TabContent>
              <TabContent id='tabCreate'>Incluir<h1></h1></TabContent>
              <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
              <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect (null, mapDispatchToProps)(BillingCycle)

