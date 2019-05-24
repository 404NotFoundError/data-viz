import SearchModal from '../components/SearchModal/SearchModal';
import sinon from 'sinon';


const searchBar = new SearchModal();

sinon.stub(searchBar, 'userInputValidation').callsFake(function fakeFn() {

    const userValue = "this";
    if (userValue.length >= 5) {
        return "value >= 5"
    }
    else {
        return "value < 5"
    }
});

test('return value >= 5', () => {
    expect(searchBar.userInputValidation()).toMatch("value >= 5");
});

test('return value < 5', () => {
    expect(searchBar.userInputValidation()).toMatch("value < 5");
});




