import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function(){          //function is used instead of ()=> because it has access to "this", the anonymous function has a different context for some reason
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            ownerId: this.userId,
            sharedWith: []
        })
    },
    'bins.remove': function (bin) {
        return Bins.remove(bin);
    }
})

export const Bins = new Mongo.Collection('bins');