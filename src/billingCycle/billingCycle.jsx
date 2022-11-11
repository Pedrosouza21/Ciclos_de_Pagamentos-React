import React, { Component} from 'react '

import Content from '../commom/template/content'
import ContentHeader from '../commom/template/contentHeader'
import Tabs from '../commom/tab/tabs'
import TabsContent from '../commom/tab/tabsContent'
import TabsHeader from '../commom/tab/tabsHeader'

class BillingCycle extends Component {
    render() {
        return (
            <div> 
                <ContentHeader title= 'Ciclos de Pagamentos' small='Cadastro'/>
                    <Content>
                            <Tabs>
                                <TabsHeader>

                                </TabsHeader>
                                <TabsContent>
                                    
                                </TabsContent>
                            </Tabs>                  
                </Content>
            </div>
        )
    }
}

export default BillingCycle