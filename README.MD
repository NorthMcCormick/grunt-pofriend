# PO Friend 🍻

There are a multitude of plugins available to pull translations from your source and update a template file, but nothing to update the PO files to close the loop on translation automation. 

That's where PO Friend comes in.

## Getting Started

This plugin requires:

- Grunt `~0.4.1` 
- [gettext](https://www.gnu.org/software/gettext/) (Installation instructions: [Mac](http://brewformulas.org/Gettext), [Windows](http://gnuwin32.sourceforge.net/packages/gettext.htm) and [Linux](http://ftp.gnu.org/pub/gnu/gettext/))

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pofriend --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pofriend');
```

## The "updatePO" task

### Overview

In your project's Gruntfile, add a section named `updatePO` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  updatePO: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options 

There are no options yet

### Files

The destination file is the template (.pot), the sources are the `*.po` files. This example below will update all the `*.po` files in the po directory with the data in the `template.pot`. Once this is done, you will have updated PO files, and a backup that looks like `*.po~` in case you need it.

```js
  updatePO: {
    all: {
      files: {
        'po/template.pot': ['po/*.po']
      }
    }
  }
```

## Changelog

### 1.0.1

* First release, woohoo!
