json.array!(@comments) do |comment|
  json.extract! comment, :id, :author, :comment
  json.url comment_url(comment, format: :json)
end
