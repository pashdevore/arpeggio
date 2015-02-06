# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150206162340) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "profiles", force: :cascade do |t|
    t.string   "first_name",   null: false
    t.string   "last_name",    null: false
    t.string   "gravatar_url"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "song_likes", force: :cascade do |t|
    t.integer  "song_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "songs", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "title",         null: false
    t.string   "description",   null: false
    t.string   "image_url",     null: false
    t.string   "thumbnail_url", null: false
    t.integer  "image_height",  null: false
    t.integer  "image_width",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "song_id",    null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string   "label",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_follows", force: :cascade do |t|
    t.integer  "follower_id",  null: false
    t.integer  "following_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "profile_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
