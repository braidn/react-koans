/* global describe it */
import TodoList, {ListItem} from '../../koans-1/tasks/2-React-TodoList-one-way-data-binding.js'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('Virtual DOM test. React Compoment, React Instance and React Element:', () => {
  it('JsX creates React Elements.', () => {
    const amIAComponent = <TodoList />
    const elementType = 'react.element'

    expect(`Symbol(${elementType})`).to.be.equal(amIAComponent['$$typeof'].toString())
  })

  it('JsX creates new objects every time.', () => {
    const component1 = <TodoList />
    const component2 = <TodoList />

    // change this assertion, are the two React Elements deeply equal?
    // the objects are deeply equal but they are different instances so a simple equal works
    expect(component1).not.to.be.equal(component2)
  })

  it("React Elements do not implement component's functionality.", () => {
    const reactElement = <TodoList />

    // An assertion library would give you many clues and it would be too easy, that's why we are throwing an Error with a custome message instead
    expect(reactElement.addTask).to.be.undefined
  })

  it('Rendering into the document should return a React Instance.', () => {
    const component = TestUtils.renderIntoDocument(<TodoList />)

    // An assertion library would give you many clues and it would be too easy, that's why we are throwing an Error with a custome message instead
    // Change the following condition
    expect(component.addTask).to.be.a('function')
  })

  it('TestUtils.renderIntoDocument should return a detached React Instance.', () => {
    const detachedComp1 = TestUtils.renderIntoDocument(<TodoList />)
    const detachedComp2 = TestUtils.renderIntoDocument(<TodoList />)

    expect(detachedComp1).to.not.be.eq(detachedComp2)
  })

  it('Shallow render should return the same React type for the same component (they are not detached).', () => {
    const component1 = shallow(<TodoList />)
    const component2 = shallow(<TodoList />)

    expect(component1.type()).to.eq(component2.type())
  })
})
