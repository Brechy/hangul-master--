import { shallow } from 'enzyme';
import sinon from 'sinon';
import CardForm from '../components/CardComponents/CardForm.jsx';

describe('<CardForm />', () => {
  it('renders the card form component', () => {
    const wrapper = shallow(<CardForm />);
    expect(wrapper.find(Cardform)).to.have.lengthOf(1);
  });

  it('renders input fields', () => {
    const wrapper = mount(<div className="control" />);
    expect(wrapper.exists('.control')).to.equal(true);
    expect(wrapper.find('.floopy').exists()).to.equal(false);
  })

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Button>
        <div className="is-warning" />
      </Button>
    ));
    expect(wrapper.contains(<div className="is-warning" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button onClick={(event) => this.handleSave(event)} loading={this.state.isSaving} className="save" />);
    wrapper.find('save').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });
})
