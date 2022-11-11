import React, { Component } from "react ";

import Content from "../commom/template/content";
import ContentHeader from "../commom/template/contentHeader";
import Tabs from "../commom/tab/tabs";
import TabsContent from "../commom/tab/tabsContent";
import TabsHeader from "../commom/tab/tabsHeader";
import TabHeader from "../commom/tab/tabHeader";

class BillingCycle extends Component {
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
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;
