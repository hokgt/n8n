# Wijayacorp Custom Nodes

Place custom n8n nodes here. Each node should be in its own directory.

## Structure
```
custom-nodes/
├── FrappeErp/
│   ├── FrappeErp.node.ts
│   └── FrappeErp.credentials.ts
├── WijayacorpUtils/
│   └── WijayacorpUtils.node.ts
└── README.md
```

## Development
Custom nodes are copied into the n8n custom extensions directory during Docker build.
They are auto-discovered by n8n at startup.
