export interface IFabricator {
  id: number
  fabricator: string
  devices: [{ id: number; deviceModel: string }]
}
