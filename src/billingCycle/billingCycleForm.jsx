import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm , Field } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndIput from '../commom/form/labelAndIput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field name = 'name' component=  {labelAndIput} readOnly={readOnly}
                        label ='Nome' cols='12 4' placeholder='Informe o nome' />
                        <Field name = 'month' component= {labelAndIput} type='number' readOnly={readOnly}
                        label='Mes' cols = '12 4' placeholder='Informe o mes' />
                        <Field name = 'year ' component= {labelAndIput}  type='number' readOnly={readOnly}
                        label = 'Ano' cols = '12 4' placeholder='Informe o ano'/>
                    </div>
                    <div className='box-footer'>
                    <button type ='submit' className= {`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                        </button>
                    <button type ='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>

                    </div>
                </form>
        )
    }
}

BillingCycleForm =  reduxForm ({form: 'billingCycleForm', destroyOnUnmount: false}) (BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm )