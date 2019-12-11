# eslint-plugin-cathytest

cathy指定的测试规则

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cathytest`:

```
$ npm install eslint-plugin-cathytest --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-cathytest` globally.

## Usage

Add `cathytest` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cathytest"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cathytest/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





