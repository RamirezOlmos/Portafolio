module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/no-unknown-property": ['error', {
      ignore: ['intensity',
        'groundColor', 'object', 'position', 'rotation',
        'angle', 'penumbra', 'castShadow', 'shadow-mapSize',
        'options', 'receiveShadow', 'args', 'polygonOffset',
        'polygonOffsetFactor', 'flatShading', 'position-y',
        'rotation-y']
    }]
  }
}
