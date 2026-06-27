export const CreateViewSchema = {
  computer: [
    "manufacturer",
    "hostname",
    "ip_address",
    "mac_address",
    "cpu_name",
    "ram_size",
    "storage_size",
  ],
  switch: ["hostname", "port", "room", "qr_code_id"],
  monitor: ["manufacturer", "screen_diagonal", "screen_resolution", "refresh_rate", "qr_code_id"],
};
