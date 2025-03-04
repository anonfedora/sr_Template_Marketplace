# Soroban Project

## Estructura del Proyecto

Este repositorio usa la estructura recomendada para un proyecto Soroban:
```text
.
├── contracts
│   └── hello_world
│       ├── src
│       │   ├── lib.rs
│       │   └── test.rs
│       └── Cargo.toml
├── Cargo.toml
└── README.md
```

## Pre-requisitos

1. **Rust**
   - Para Linux/macOS:
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```
   - Para Windows: Descargar el instalador desde [rust-lang.org](https://www.rust-lang.org/tools/install)

   Después de instalar Rust, agregar el target wasm32:
   ```bash
   rustup target add wasm32-unknown-unknown
   ```

2. **Stellar CLI**
   ```bash
   cargo install --locked stellar-cli
   ```

## Compilación y Ejecución

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd marketplace-contracts
   ```

2. **Compilar el contrato**
   ```bash
   stellar contract build
   ```

3. **Ejecutar pruebas**
   ```bash
   cargo test
   ```

## Despliegue

Para desplegar el contrato en la testnet de Stellar:

```bash
stellar contract deploy \
   --wasm-hash <hash-del-contrato> \
   --source <cuenta-origen> \
   --network testnet
```

- Los nuevos contratos Soroban deben colocarse en el directorio `contracts`, cada uno en su propio directorio.
- Cada contrato debe tener su propio archivo `Cargo.toml` que dependa del workspace definido en el `Cargo.toml` principal.
- Si inicializaste este proyecto con ejemplos adicionales, estos se encontrarán en el directorio `contracts`.