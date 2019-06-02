import { GenericValidator } from './generic-validator';

describe('GenericValidator', () => {
  it('should create an instance', () => {
    let validationMessages = {
      SelectedAnswer: {
        required: 'Select answer'
      }
    };
    expect(new GenericValidator(validationMessages)).toBeTruthy();
  });
});
