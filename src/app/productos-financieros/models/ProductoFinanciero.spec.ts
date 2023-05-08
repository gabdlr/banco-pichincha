import { ProductoFinanciero } from './ProductoFinanciero';

describe('ProductoFinancieroModelSpec', () => {
  it('should create new class instance', () => {
    const instance = new ProductoFinanciero();
    expect(instance).toBeTruthy();
  });

  it('should fill ProductoFinanciero instance fields with DTO', () => {
    const instance = new ProductoFinanciero();
    const mockDTO = {
      id: 'trj-crd',
      name: 'Tarjetas de credito',
      description: 'Tarjeta de consume bajo la modalidad de credito',
      logo: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/visa-512.png',
      date_release: '2023-02-01T00:00:00.000+00:00',
      date_revision: '2024-02-01T00:00:00.000+00:00',
    };
    instance.fromDTO(mockDTO);
    expect(instance.id).toEqual(mockDTO.id);
  });
});
