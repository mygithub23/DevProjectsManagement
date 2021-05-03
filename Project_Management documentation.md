       

### <a id="documentation-body"></a>

![Hackolade image](/Project_Management%20documentation/pam.png?raw=true)


System Design
-------------

![Hackolade image](/Project_Management%20documentation/system-2.png?raw=true)


System Diagram
-------------

![Hackolade image](/Project_Management%20documentation/sys-diagram.png?raw=true)



MongoDB Physical Model
----------------------

#### Schema for:

Model name: Project\_Management

Author:

Version:

File name: MongoDB model Project\_Management.json

File path: D:\\Documents\\\_Dev\\Hackolade\\Project-3-Model-C\\MongoDB model Project\_Management.json

Printed On: Thu Apr 15 2021 20:43:25 GMT-0400 (Eastern Daylight Time)

Created with: [Hackolade](https://hackolade.com/) - Visual data modeling for NoSQL and multimodel databases

### <a id="contents"></a>

*   [1. Model](#model)
*   [2. Databases](#containers)
    *   [2.1 Project_Management](#0546f690-9cc1-11eb-b6f1-cb10751d72aa)
        
        [2.1.2. Collections](#0546f690-9cc1-11eb-b6f1-cb10751d72aa-children)
        
        [2.1.2.1 developers](#403db860-9cc1-11eb-b6f1-cb10751d72aa)
        
        [2.1.2.2 projects](#0bf3f290-9cc1-11eb-b6f1-cb10751d72aa)
        
        [2.1.2.3 tech_stacks](#60f14d60-9cc1-11eb-b6f1-cb10751d72aa)
        
*   [3. Relationships](#relationships)
    *   [3.1 fk developers. to projects.](#cb6ee600-9cd2-11eb-b6f1-cb10751d72aa)
    *   [3.2 fk tech_staks. to developers.](#dc10f760-9cc2-11eb-b6f1-cb10751d72aa)
    *   [3.3 fk tech_staks. to projects.](#c2496ff0-9cd2-11eb-b6f1-cb10751d72aa)

### <a id="model"></a>

##### 1\. Model

##### 1.1 Model **Project\_Management**

##### 1.1.1 **Project\_Management** Entity Relationship Diagram

![Hackolade image](/Project_Management%20documentation/image2.png?raw=true)

##### 1.1.2 **Project\_Management** Properties

##### 1.1.2.1 **Details** tab

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td><span>Model name</span></td><td>Project_Management</td></tr><tr><td><span>Technical name</span></td><td></td></tr><tr><td><span>Description</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Author</span></td><td></td></tr><tr><td><span>Version</span></td><td></td></tr><tr><td><span>DB vendor</span></td><td>MongoDB</td></tr><tr><td><span>DB version</span></td><td>v4.4</td></tr><tr><td><span>Comments</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Lineage</span></td><td></td></tr></tbody></table>

##### 1.1.3 **Project\_Management** DB Definitions

### <a id="containers"></a>

##### 2\. Databases

### <a id="0546f690-9cc1-11eb-b6f1-cb10751d72aa"></a>2.1 Database **Project\_Management**

![Hackolade image](/Project_Management%20documentation/image3.png?raw=true)

##### 2.1.1 **Project\_Management** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>Project_Management</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0546f690-9cc1-11eb-b6f1-cb10751d72aa-children"></a>2.1.2 **Project\_Management** Collections

### <a id="403db860-9cc1-11eb-b6f1-cb10751d72aa"></a>2.1.2.1 Collection **developers**

##### 2.1.2.1.1 **developers** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image4.png?raw=true)

##### 2.1.2.1.2 **developers** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>developers</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#0546f690-9cc1-11eb-b6f1-cb10751d72aa>Project_Management</a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3 **developers** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#9cd67160-9cc2-11eb-b6f1-cb10751d72aa>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a8c7b1a0-9cc2-11eb-b6f1-cb10751d72aa>name</a></td><td class="no-break-word">string</td><td>true</td><td>dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c534c350-9cc2-11eb-b6f1-cb10751d72aa>role</a></td><td class="no-break-word">string</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9cd67160-9cc2-11eb-b6f1-cb10751d72aa"></a>2.1.2.1.3.1 Field **\_id**

##### 2.1.2.1.3.1.1 **\_id** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image5.png?raw=true)

##### 2.1.2.1.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a8c7b1a0-9cc2-11eb-b6f1-cb10751d72aa"></a>2.1.2.1.3.2 Field **name**

##### 2.1.2.1.3.2.1 **name** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image6.png?raw=true)

##### 2.1.2.1.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>Adam</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c534c350-9cc2-11eb-b6f1-cb10751d72aa"></a>2.1.2.1.3.3 Field **role**

##### 2.1.2.1.3.3.1 **role** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image7.png?raw=true)

##### 2.1.2.1.3.3.2 **role** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>role</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#60f14d60-9cc1-11eb-b6f1-cb10751d72aa>tech_stacks</a></td></tr><tr><td>Foreign field</td><td><a href=#fc270950-9cc1-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk tech_staks. to developers.</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>JavaScript</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.4 **developers** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "developers",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "role": {
            "type": "string"
        }
    },
    "required": [
        "_id",
        "name",
        "role"
    ]
}
```

##### 2.1.2.1.5 **developers** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "Adam",
    "role": "JavaScript"
}
```

##### 2.1.2.1.6 **developers** Target Script

```
use Project_Management;

db.createCollection("developers", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "developers",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "role": {
                    "bsonType": "string"
                }
            },
            "required": [
                "_id",
                "name",
                "role"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="0bf3f290-9cc1-11eb-b6f1-cb10751d72aa"></a>2.1.2.2 Collection **projects**

##### 2.1.2.2.1 **projects** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image8.png?raw=true)

##### 2.1.2.2.2 **projects** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>projects</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#0546f690-9cc1-11eb-b6f1-cb10751d72aa>Project_Management</a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3 **projects** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#fe67b510-9cc2-11eb-b6f1-cb10751d72aa>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0d50b180-9cc3-11eb-b6f1-cb10751d72aa>name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#49c2c8b0-9cc3-11eb-b6f1-cb10751d72aa>due_date</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4f55abb0-9ccf-11eb-b6f1-cb10751d72aa>tech_stack</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4f5c3b60-9ccf-11eb-b6f1-cb10751d72aa>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9669c6d0-9ccf-11eb-b6f1-cb10751d72aa>name</a></td><td class="no-break-word">string</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3b17d3c0-9cd0-11eb-b6f1-cb10751d72aa>count</a></td><td class="no-break-word">numeric</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5c2102d0-9cd0-11eb-b6f1-cb10751d72aa>developers</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#84b1fd80-9cd0-11eb-b6f1-cb10751d72aa>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7ffe75a0-9cd2-11eb-b6f1-cb10751d72aa>name</a></td><td class="no-break-word">string</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="fe67b510-9cc2-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.1 Field **\_id**

##### 2.1.2.2.3.1.1 **\_id** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image9.png?raw=true)

##### 2.1.2.2.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0d50b180-9cc3-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.2 Field **name**

##### 2.1.2.2.3.2.1 **name** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image10.png?raw=true)

##### 2.1.2.2.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>Project-1</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="49c2c8b0-9cc3-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.3 Field **due\_date**

##### 2.1.2.2.3.3.1 **due\_date** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image11.png?raw=true)

##### 2.1.2.2.3.3.2 **due\_date** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>due_date</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4f55abb0-9ccf-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.4 Field **tech\_stack**

##### 2.1.2.2.3.4.1 **tech\_stack** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image12.png?raw=true)

##### 2.1.2.2.3.4.2 **tech\_stack** Hierarchy

Parent field: **projects**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#4f5c3b60-9ccf-11eb-b6f1-cb10751d72aa>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.4.3 **tech\_stack** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>tech_stack</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4f5c3b60-9ccf-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.5 Field **\[0\]**

##### 2.1.2.2.3.5.1 **\[0\]** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image13.png?raw=true)

##### 2.1.2.2.3.5.2 **\[0\]** Hierarchy

Parent field: **tech\_stack**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#9669c6d0-9ccf-11eb-b6f1-cb10751d72aa>name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3b17d3c0-9cd0-11eb-b6f1-cb10751d72aa>count</a></td><td class="no-break-word">numeric</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.5.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9669c6d0-9ccf-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.6 Field **name**

##### 2.1.2.2.3.6.1 **name** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image14.png?raw=true)

##### 2.1.2.2.3.6.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#60f14d60-9cc1-11eb-b6f1-cb10751d72aa>tech_stacks</a></td></tr><tr><td>Foreign field</td><td><a href=#fc270950-9cc1-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk tech_staks. to projects.</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>JavaScript</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3b17d3c0-9cd0-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.7 Field **count**

##### 2.1.2.2.3.7.1 **count** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image15.png?raw=true)

##### 2.1.2.2.3.7.2 **count** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>count</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>1</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5c2102d0-9cd0-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.8 Field **developers**

##### 2.1.2.2.3.8.1 **developers** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image16.png?raw=true)

##### 2.1.2.2.3.8.2 **developers** Hierarchy

Parent field: **projects**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#84b1fd80-9cd0-11eb-b6f1-cb10751d72aa>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.8.3 **developers** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>developers</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="84b1fd80-9cd0-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.9 Field **\[0\]**

##### 2.1.2.2.3.9.1 **\[0\]** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image17.png?raw=true)

##### 2.1.2.2.3.9.2 **\[0\]** Hierarchy

Parent field: **developers**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#7ffe75a0-9cd2-11eb-b6f1-cb10751d72aa>name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.9.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7ffe75a0-9cd2-11eb-b6f1-cb10751d72aa"></a>2.1.2.2.3.10 Field **name**

##### 2.1.2.2.3.10.1 **name** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image18.png?raw=true)

##### 2.1.2.2.3.10.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#403db860-9cc1-11eb-b6f1-cb10751d72aa>developers</a></td></tr><tr><td>Foreign field</td><td><a href=#a8c7b1a0-9cc2-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk developers. to projects.</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>Adam</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.4 **projects** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "projects",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "due_date": {
            "type": "string",
            "format": "date-time"
        },
        "tech_stack": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "count": {
                        "type": "number"
                    }
                },
                "required": [
                    "name",
                    "count"
                ]
            }
        },
        "developers": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    }
                },
                "required": [
                    "name"
                ]
            }
        }
    },
    "required": [
        "_id",
        "name",
        "due_date"
    ]
}
```

##### 2.1.2.2.5 **projects** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "Project-1",
    "due_date": ISODate("2016-04-08T15:06:21.595Z"),
    "tech_stack": [
        {
            "name": "JavaScript",
            "count": 1
        }
    ],
    "developers": [
        {
            "name": "Adam"
        }
    ]
}
```

##### 2.1.2.2.6 **projects** Target Script

```
use Project_Management;

db.createCollection("projects", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "projects",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "due_date": {
                    "bsonType": "date"
                },
                "tech_stack": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "name": {
                                "bsonType": "string"
                            },
                            "count": {
                                "bsonType": "number"
                            }
                        },
                        "required": [
                            "name",
                            "count"
                        ]
                    }
                },
                "developers": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "name": {
                                "bsonType": "string"
                            }
                        },
                        "required": [
                            "name"
                        ]
                    }
                }
            },
            "required": [
                "_id",
                "name",
                "due_date"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="60f14d60-9cc1-11eb-b6f1-cb10751d72aa"></a>2.1.2.3 Collection **tech\_stacks**

##### 2.1.2.3.1 **tech\_stacks** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image19.png?raw=true)

##### 2.1.2.3.2 **tech\_stacks** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>tech_stacks</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#0546f690-9cc1-11eb-b6f1-cb10751d72aa>Project_Management</a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3 **tech\_stacks** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#cc09d630-9cc1-11eb-b6f1-cb10751d72aa>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#fc270950-9cc1-11eb-b6f1-cb10751d72aa>name</a></td><td class="no-break-word">string</td><td>true</td><td>dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#21851390-9cc2-11eb-b6f1-cb10751d72aa>Description</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cc09d630-9cc1-11eb-b6f1-cb10751d72aa"></a>2.1.2.3.3.1 Field **\_id**

##### 2.1.2.3.3.1.1 **\_id** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image20.png?raw=true)

##### 2.1.2.3.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="fc270950-9cc1-11eb-b6f1-cb10751d72aa"></a>2.1.2.3.3.2 Field **name**

##### 2.1.2.3.3.2.1 **name** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image21.png?raw=true)

##### 2.1.2.3.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>JavaScript</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="21851390-9cc2-11eb-b6f1-cb10751d72aa"></a>2.1.2.3.3.3 Field **Description**

##### 2.1.2.3.3.3.1 **Description** Tree Diagram

![Hackolade image](/Project_Management%20documentation/image22.png?raw=true)

##### 2.1.2.3.3.3.2 **Description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>Description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.4 **tech\_stacks** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "tech_stacks",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "Description": {
            "type": "string"
        }
    },
    "required": [
        "_id",
        "name"
    ]
}
```

##### 2.1.2.3.5 **tech\_stacks** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "JavaScript",
    "Description": "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions"
}
```

##### 2.1.2.3.6 **tech\_stacks** Target Script

```
use Project_Management;

db.createCollection("tech_stacks", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "tech_stacks",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "Description": {
                    "bsonType": "string"
                }
            },
            "required": [
                "_id",
                "name"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="relationships"></a>

##### 3\. Relationships

### <a id="cb6ee600-9cd2-11eb-b6f1-cb10751d72aa"></a>3.1 Relationship **fk developers. to projects.**

##### 3.1.1 **fk developers. to projects.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#403db860-9cc1-11eb-b6f1-cb10751d72aa>developers</a></td><td><a href=#a8c7b1a0-9cc2-11eb-b6f1-cb10751d72aa>name</a></td></tr></tbody></table>

![Hackolade image](/Project_Management%20documentation/image23.png?raw=true)![Hackolade image](/Project_Management%20documentation/image24.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#0bf3f290-9cc1-11eb-b6f1-cb10751d72aa>projects</a></td><td><a href=#7ffe75a0-9cd2-11eb-b6f1-cb10751d72aa>developers.[-1].name</a></td></tr></tbody></table>

##### 3.1.2 **fk developers. to projects.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk developers. to projects.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#403db860-9cc1-11eb-b6f1-cb10751d72aa>developers</a></td></tr><tr><td>Parent field</td><td><a href=#a8c7b1a0-9cc2-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#0bf3f290-9cc1-11eb-b6f1-cb10751d72aa>projects</a></td></tr><tr><td>Child field</td><td><a href=#7ffe75a0-9cd2-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="dc10f760-9cc2-11eb-b6f1-cb10751d72aa"></a>3.2 Relationship **fk tech\_staks. to developers.**

##### 3.2.1 **fk tech\_staks. to developers.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#60f14d60-9cc1-11eb-b6f1-cb10751d72aa>tech_stacks</a></td><td><a href=#fc270950-9cc1-11eb-b6f1-cb10751d72aa>name</a></td></tr></tbody></table>

![Hackolade image](/Project_Management%20documentation/image25.png?raw=true)![Hackolade image](/Project_Management%20documentation/image26.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#403db860-9cc1-11eb-b6f1-cb10751d72aa>developers</a></td><td><a href=#c534c350-9cc2-11eb-b6f1-cb10751d72aa>role</a></td></tr></tbody></table>

##### 3.2.2 **fk tech\_staks. to developers.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk tech_staks. to developers.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#60f14d60-9cc1-11eb-b6f1-cb10751d72aa>tech_stacks</a></td></tr><tr><td>Parent field</td><td><a href=#fc270950-9cc1-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#403db860-9cc1-11eb-b6f1-cb10751d72aa>developers</a></td></tr><tr><td>Child field</td><td><a href=#c534c350-9cc2-11eb-b6f1-cb10751d72aa>role</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="c2496ff0-9cd2-11eb-b6f1-cb10751d72aa"></a>3.3 Relationship **fk tech\_staks. to projects.**

##### 3.3.1 **fk tech\_staks. to projects.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#60f14d60-9cc1-11eb-b6f1-cb10751d72aa>tech_stacks</a></td><td><a href=#fc270950-9cc1-11eb-b6f1-cb10751d72aa>name</a></td></tr></tbody></table>

![Hackolade image](/Project_Management%20documentation/image27.png?raw=true)![Hackolade image](/Project_Management%20documentation/image28.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#0bf3f290-9cc1-11eb-b6f1-cb10751d72aa>projects</a></td><td><a href=#9669c6d0-9ccf-11eb-b6f1-cb10751d72aa>tech_stack.[-1].name</a></td></tr></tbody></table>

##### 3.3.2 **fk tech\_staks. to projects.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk tech_staks. to projects.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#60f14d60-9cc1-11eb-b6f1-cb10751d72aa>tech_stacks</a></td></tr><tr><td>Parent field</td><td><a href=#fc270950-9cc1-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#0bf3f290-9cc1-11eb-b6f1-cb10751d72aa>projects</a></td></tr><tr><td>Child field</td><td><a href=#9669c6d0-9ccf-11eb-b6f1-cb10751d72aa>name</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="edges"></a>